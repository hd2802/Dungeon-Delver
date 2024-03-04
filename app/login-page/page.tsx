"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js"
import "../styles/LoginPage.css"

const LoginPage = () => {
    // Index 0 contains login text, index 1 contains account creation text.
    const loginButtonText = ["Login", "Create account"]
    const loginSwitchButtonText = ["Go to create account", "Go to login"];
    const pageHeaderText = ["Login to account", "Create account"];

    let confirmPassword : HTMLDivElement;
    let loginButton : HTMLDivElement;
    let loginSwitchButton : HTMLElement;
    let pageHeader : HTMLElement;
    let isCreateAccount = false;
    
    useEffect(() => {
        GetHTMLElements();
    }, [])

    const GetHTMLElements = () => {
        confirmPassword = document.getElementById("confirmPassword") as HTMLDivElement;
        loginButton = document.getElementById("loginButton") as HTMLDivElement;
        loginSwitchButton = document.getElementById("loginSwitchButton") as HTMLDivElement;
        pageHeader = document.getElementById("pageHeader") as HTMLDivElement;
    }

    const GetLoginForm = () => {
        return (
            <form action="">
                <label htmlFor="emailInput"> Email: </label>
                <input type="email" id="emailInput"/>
                <label htmlFor="passwordInput"> Password: </label>
                <input type="password" id="passwordInput"/>
        
                <div id="confirmPassword" className="invisible">
                    <label htmlFor="confirmPasswordInput"> Confirm password: </label>
                <input type="password" id="confirmPasswordInput"/>
                </div>
    
                <a href="#" id="loginSwitchButton" onClick={HandleLoginSwitchButtonPress}>
                    Go to create account
                </a>
                <button id="loginButton" onClick={HandleLoginButtonPress}>
                    Login
                </button>
            </form>
        );
    }

    const HandleLoginButtonPress = () => {
        if (isCreateAccount) {
            const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
            const { data, error } = supabase.from("User_Emails_Passwords").select("*"); 

            alert(data);
        }
    }
    
    // This is not very efficient, but it works.
    const HandleLoginSwitchButtonPress = () => {
        
        const currVisibility = window.getComputedStyle(confirmPassword).visibility;
        let index : number = 0;
        isCreateAccount = false;
    
        if (currVisibility === "visible")
            confirmPassword.style.visibility = "hidden"; 
        else
        {
            index = 1;
            confirmPassword.style.visibility = "visible";
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
