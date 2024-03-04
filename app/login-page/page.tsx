"use client";
import React, { useState } from "react";
import "../styles/LoginPage.css"

// Index 0 contains login text, index 1 contains account creation text.
const loginButtonText = ["Login", "Create account"]
const loginSwitchButtonText = ["Go to create account", "Go to login"];
const pageHeaderText = ["Login to account", "Create account"];

function HandleLoginButtonPress() {

}

// This is not very efficient, but it works.
function HandleLoginSwitchButtonPress() {
    const confirmPassword = document.getElementById("confirmPassword") as HTMLDivElement;
    const loginButton = document.getElementById("loginButton") as HTMLDivElement;
    const loginSwitchButton = document.getElementById("loginSwitchButton") as HTMLDivElement;
    const pageHeader = document.getElementById("pageHeader") as HTMLDivElement;
    const currVisibility = window.getComputedStyle(confirmPassword).visibility;

    let index : number = 0;

    if (currVisibility === "visible")
        confirmPassword.style.visibility = "hidden"; 
    else
    {
        index = 1;
        confirmPassword.style.visibility = "visible"; 
    }
        
    loginButton.textContent = loginButtonText[index];
    loginSwitchButton.textContent = loginSwitchButtonText[index];
    pageHeader.textContent = pageHeaderText[index];
}

function LoginForm() {
    return (
        <>
            <label>
                <div>
                    Email: <br/> <input name="emailInput" />
                </div>
            </label>

            <label>
                <div>
                    Password: <br/> <input name="passwordInput" />
                </div>
            </label>

            <label>
                <div id="confirmPassword" className="invisible">
                    Confirm password: <br/> <input name="confirmPasswordInput" />
                </div>
            </label>

            <button id="loginButton" onClick={HandleLoginButtonPress}>
                Login
            </button>

            <a href="#" id="loginSwitchButton" onClick={HandleLoginSwitchButtonPress}>
                Go to create account
            </a>
        </>
    );
}

export default function LoginPage() {
    const renderPage = () => {
        return (
            <div>
                <h1 id="pageHeader"> Login </h1>
                {LoginForm()}
            </div>
        );
    };

    return <div>{renderPage()}</div>
}