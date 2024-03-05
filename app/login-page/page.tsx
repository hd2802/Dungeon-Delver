"use client";
import React, { useState, useEffect } from "react";
import { supabase, minPasswordChars } from "../supabase"
import * as EmailValidator from "email-validator"
import "../styles/LoginPage.css"
import { PiPasswordBold } from "react-icons/pi";

interface IDBUserData {
    id: number,
    email: string,
    verification_code: number,
    password_SHA512: string,
    is_verified: boolean
}

const LoginPage = () => {
    // Index 0 contains login text, index 1 contains account creation text.
    const loginButtonText = ["Login", "Create account"]
    const loginSwitchButtonText = ["Go to create account", "Go to login"];
    const pageHeaderText = ["Login to account", "Create account"];

    let confirmPassword : HTMLInputElement;
    let loginButton : HTMLButtonElement;
    let loginSwitchButton : HTMLElement;
    let pageHeader : HTMLElement;
    
    let emailLabel : HTMLLabelElement;
    let emailInput : HTMLInputElement;

    let passwordLabel: HTMLLabelElement;
    let passwordInput: HTMLInputElement;

    let confirmPasswordLabel: HTMLLabelElement;
    let confirmPasswordInput: HTMLInputElement; 

    let passwordInfoLabel: HTMLLabelElement;
    let isCreateAccount = false;
    
    useEffect(() => {
        GetHTMLElements();
    }, [])

    const GetHTMLElements = () => {
        confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
        loginButton = document.getElementById("loginButton") as HTMLButtonElement;
        loginSwitchButton = document.getElementById("loginSwitchButton") as HTMLElement;
        pageHeader = document.getElementById("pageHeader") as HTMLElement;

        emailLabel = document.getElementById("emailLabel") as HTMLLabelElement;
        emailInput = document.getElementById("emailInput") as HTMLInputElement;

        passwordLabel = document.getElementById("passwordLabel") as HTMLLabelElement;
        passwordInput = document.getElementById("passwordInput") as HTMLInputElement;

        confirmPasswordLabel = document.getElementById("confirmPasswordLabel") as HTMLLabelElement;
        confirmPasswordInput = document.getElementById("confirmPasswordInput") as HTMLInputElement;

        passwordInfoLabel = document.getElementById("passwordInfoLabel") as HTMLLabelElement;
    }

    const GetLoginForm = () => {
        return (
            <form action="">
                <label htmlFor="emailInput" id="emailLabel"> Email: </label>
                <input type="email" id="emailInput"/>
                <label htmlFor="passwordInput" id="passwordLabel"> Password: </label>
                <input type="password" id="passwordInput"/>
        
                <div id="confirmPassword" className="invisible">
                    <label htmlFor="confirmPasswordInput" id="confirmPasswordLabel"> Confirm password: </label>
                    <input type="password" id="confirmPasswordInput"/>
                </div>
    
                <a href="#" id="loginSwitchButton" onClick={HandleLoginSwitchButtonPress}>
                    Go to create account
                </a>
                <button id="loginButton" type="button" onClick={HandleLoginButtonPress}>
                    Login
                </button>

                <label id="passwordInfoLabel" className = "invisible"> <br/> Password must be at least 10 characters long. </label>

            </form>
        );
    }

    const HandleLoginButtonPress = async () => {
        if (isCreateAccount) {
            
            const isValidEmail = EmailValidator.validate(emailInput.value);
            if (!isValidEmail)
                emailLabel.textContent = "Email: Invalid email!";
            else
                emailLabel.textContent = "Email:";

            if (passwordInput.value.length < minPasswordChars)
                passwordLabel.textContent = "Password: Invalid password!";
            else
                passwordLabel.textContent = "Password: "

            if (confirmPasswordInput.value != passwordInput.value)
                confirmPasswordLabel.textContent = "Confirm password: Passwords don't match!";
            else
                confirmPasswordLabel.textContent = "Confirm password:";
            
            /*const { data: result, error } = await supabase.from("User_Emails_Passwords").select("*") 

            const JSONString : string = JSON.stringify(result);
            const userDataArr : IDBUserData[] = JSON.parse(JSONString);
            
            for (let i = 0; i < userDataArr.length; i++)
            {
                console.log(userDataArr[i].email);
            }*/
        }
    }
    
    // This is not very efficient, but it works.
    const HandleLoginSwitchButtonPress = () => {
        
        const currVisibility = window.getComputedStyle(confirmPassword).visibility;
        let index : number = 0;
        isCreateAccount = false;
    
        if (currVisibility === "visible")
        {
            confirmPassword.style.visibility = "hidden"; 
            passwordInfoLabel.style.visibility = "hidden";
        }
        else
        {
            index = 1;
            confirmPassword.style.visibility = "visible";
            passwordInfoLabel.style.visibility = "visible";
            isCreateAccount = true; 
        }
            
        loginButton.textContent = loginButtonText[index];
        loginSwitchButton.textContent = loginSwitchButtonText[index];
        pageHeader.textContent = pageHeaderText[index];
    }

    const renderPage = () => {
        return (
            <div>
                <h1 id="pageHeader"> Login </h1>
                {GetLoginForm()}
            </div>
        );
    };

    return renderPage();
}

export default LoginPage;
