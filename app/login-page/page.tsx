"use client";
import React, { useState, useEffect } from "react";
import { supabase, minPasswordChars, maxPasswordChars, salt } from "../supabase";
import * as EmailValidator from "email-validator";
import { sha512 } from "sha512-crypt-ts";
import "../styles/LoginPage.css";

interface IDBUserData {
    id: number,
    email: string,
    verification_code: number,
    password_SHA512: string,
    is_verified: boolean
}

const LoginPage = () => {
    // Index 0 contains login text, index 1 contains account creation text.
    const loginButtonText = ["Login", "Create account", "Verify email"]
    const loginSwitchButtonText = ["Go to create account", "Go to login", "Go to login"];
    const pageHeaderText = ["Login to account", "Create account", "Verify email"];

    const emailLabelBaseText = "Email: ";
    const passwordLabelBaseText = "Password: ";
    const confirmPasswordLabelText = ["", "Confirm password: ", "Verification code: "];

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
    let loginInputs: HTMLDivElement;
    let menuIndex = 0;
    
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
        loginInputs = document.getElementById("loginInputs") as HTMLDivElement;
    }

    const GetLoginForm = () => {
        return (
            <form action="">
                <div id="loginInputs">
                    <label htmlFor="emailInput" id="emailLabel"> {emailLabelBaseText} </label>
                    <input type="email" id="emailInput"/>
                    <label htmlFor="passwordInput" id="passwordLabel"> {passwordLabelBaseText} </label>
                    <input type="password" id="passwordInput"/>
                </div>

                <div id="confirmPassword" className="invisible">
                    <label htmlFor="confirmPasswordInput" id="confirmPasswordLabel"> {confirmPasswordLabelText[1]} </label>
                    <input type="password" id="confirmPasswordInput"/>
                </div>
    
                <a href="#" id="loginSwitchButton" onClick={HandleLoginSwitchButtonPress}>
                    {loginSwitchButtonText[0]}
                </a>
                <button id="loginButton" type="button" onClick={HandleLoginButtonPress}>
                    {loginButtonText[0]}
                </button>

                <label id="passwordInfoLabel" className = "invisible"> <br/> Password must be at between 10 and 64 characters long. </label>

            </form>
        );
    }

    const UpdateCrossMenuItems = () => {
        loginButton.textContent = loginButtonText[menuIndex];
        loginSwitchButton.textContent = loginSwitchButtonText[menuIndex];
        pageHeader.textContent = pageHeaderText[menuIndex];
    }

    const ResetAllLabels = (in_menuIndex : number) => {
        confirmPasswordLabel.textContent = confirmPasswordLabelText[in_menuIndex];
        emailLabel.textContent = emailLabelBaseText;
        passwordLabel.textContent = passwordLabelBaseText;
    }

    const ResetAllInputs = () => {
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    }

    const HandleLoginButtonPress = async () => {
        const isValidEmail = EmailValidator.validate(emailInput.value);
        let validityCheckCounter = 0;
        
        if (menuIndex == 0 || menuIndex == 1)
        {
            if (!isValidEmail)
            emailLabel.textContent = emailLabelBaseText + "Invalid email!";
            else
            {
                emailLabel.textContent = emailLabelBaseText;
                validityCheckCounter++;
            }

            if (passwordInput.value.length < minPasswordChars || passwordInput.value.length > maxPasswordChars)
                passwordLabel.textContent = passwordLabelBaseText + "Invalid password!";
            else
            {
                passwordLabel.textContent = passwordLabelBaseText;
                validityCheckCounter++;
            }    
        }

        if (menuIndex == 1) {
            
            if (confirmPasswordInput.value !== passwordInput.value)
                confirmPasswordLabel.textContent = confirmPasswordLabelText[1] + "Passwords don't match!";
            else
            {
                confirmPasswordLabel.textContent = confirmPasswordLabelText[1];
                validityCheckCounter++;
            }
            
            if (validityCheckCounter >= 3)
            {
                const { data: result, error } = await supabase.from("User_Emails_Passwords").select().eq("email", emailInput.value);
                const JSONData = JSON.stringify(result);

                if (JSONData.length <= 2)
                {
                    validityCheckCounter++;
                    emailLabel.textContent = emailLabelBaseText;
                }
                else
                    emailLabel.textContent = emailLabelBaseText + "Account already registered!";
            }

            if (validityCheckCounter >= 4)
            {
                menuIndex = 2;
                passwordInfoLabel.style.visibility = "hidden";
                loginInputs.style.visibility = "hidden";
                confirmPasswordLabel.textContent = "Verification code:";

                const verificationCode = 1000 + Math.floor(Math.random() * 9000);
                const { data: result, error } = await supabase.from("User_Emails_Passwords").upsert([
                    {
                        email: emailInput.value,
                        verification_code: verificationCode,
                        password_SHA512: sha512.crypt(passwordInput.value, salt).toString(),
                    },
                ]);

                ResetAllInputs();
                UpdateCrossMenuItems();
            }

            /*const { data: result, error } = await supabase.from("User_Emails_Passwords").select("*") 

            const JSONString : string = JSON.stringify(result);
            const userDataArr : IDBUserData[] = JSON.parse(JSONString);
            
            for (let i = 0; i < userDataArr.length; i++)
            {
                console.log(userDataArr[i].email);
            }*/
        }
        else if (menuIndex == 2) {
            const { data: result, error } = await supabase.from("User_Emails_Passwords").select().eq("verification_code", Number(confirmPasswordInput.value));
            const JSONData = JSON.stringify(result);

            if (JSONData === null || JSONData.length <= 2)
                confirmPasswordLabel.textContent = confirmPasswordLabelText[menuIndex] + "Incorrect code!";
            else
                confirmPasswordLabel.textContent = confirmPasswordLabelText[menuIndex];
        }
    }
    
    const HandleLoginSwitchButtonPress = () => {
        
        switch (menuIndex)
        {
            case 0: {
                confirmPassword.style.visibility = "visible"; 
                passwordInfoLabel.style.visibility = "visible";
                
                menuIndex = 1;
            } break;
            case 1: {
                confirmPassword.style.visibility = "hidden";
                passwordInfoLabel.style.visibility = "hidden";
                
                menuIndex = 0;
                
            } break;
            case 2: {
                loginInputs.style.visibility = "visible";
                confirmPassword.style.visibility = "hidden";
                
                menuIndex = 0;
            } break;
        }
        
        ResetAllInputs();
        ResetAllLabels(menuIndex);
        UpdateCrossMenuItems();
    }

    const renderPage = () => {
        return (
            <div>
                <h1 id="pageHeader"> {pageHeaderText[0]} </h1>
                {GetLoginForm()}
            </div>
        );
    };

    return renderPage();
}

export default LoginPage;
