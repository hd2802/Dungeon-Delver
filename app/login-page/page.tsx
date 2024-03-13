"use client"
import React, { useState, useEffect } from "react";
import { supabase, minPasswordChars, maxPasswordChars, salt, IVerificationEmailData, } from "../supabase";
import * as EmailValidator from "email-validator";
import { sha512 } from "sha512-crypt-ts";
import "../styles/LoginPage.css";
import { SendConfirmationEmail } from "../send-email"
import { UUID } from "crypto";
import { v4 } from "uuid";

interface IDBUserData {
    id: number,
    session_id: UUID
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
    const passwordInfoLabelText = ["Account with entered email doesn't exist!", "Incorrect password!", "Account not yet verified!", 
    "Database error, please try again!", "Login successful!", "Account creation successful!", "Password must be at between 10 and 64 characters long."];

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

    let currEmail = "";
    
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

                <label id="passwordInfoLabel" className = "invisible"> <br/> {passwordInfoLabelText[6]} </label>
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

        if (in_menuIndex != 0)
            passwordInfoLabel.textContent = passwordInfoLabelText[6];
    }

    const ResetAllInputs = () => {
        emailInput.value = "";
        passwordInput.value = "";
        confirmPasswordInput.value = "";
    }

    const HandleLoginButtonPress = async () => {
        const isValidEmail = EmailValidator.validate(emailInput.value);
        let validityCheckCounter = 0;
        
        if (emailInput.value.length > 0)
            currEmail = emailInput.value;

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

        if (menuIndex == 0 && validityCheckCounter >= 2) { // Login
            const { data: emailResult, } = await supabase.from("User_Emails_Passwords").select().eq("email", emailInput.value);
            const { data: passwordResult, } = await supabase.from("User_Emails_Passwords").select().eq("password_SHA512", sha512.crypt(passwordInput.value, salt));
            const { data: isVerified, } = await supabase.from("User_Emails_Passwords").select().eq("is_verified", true);
            let JSONData = JSON.stringify(emailResult);

            if (JSONData == null || JSONData.length <= 2)
            {
                passwordInfoLabel.textContent = passwordInfoLabelText[0];
                passwordInfoLabel.style.visibility = "visible";
                return;
            }
            else
            {
                validityCheckCounter++;
                passwordInfoLabel.style.visibility = "hidden";
            }
                
            JSONData = JSON.stringify(passwordResult);
            if (validityCheckCounter >= 3 && (JSONData == null || JSONData.length <= 2))
            {
                passwordInfoLabel.textContent = passwordInfoLabelText[1];
                passwordInfoLabel.style.visibility = "visible";
                return;
            }
            else
            {
                validityCheckCounter++;
                passwordInfoLabel.style.visibility = "hidden";
            }

            JSONData = JSON.stringify(isVerified);
            if (validityCheckCounter >= 4 && (JSONData == null || JSONData.length <= 2))
            {
                passwordInfoLabel.textContent = passwordInfoLabelText[2];
                passwordInfoLabel.style.visibility = "visible";
                return;
            }
            else
            {
                validityCheckCounter++;
                passwordInfoLabel.style.visibility = "hidden";
            }

            if (validityCheckCounter >= 5)
            {
                const rUUID = v4();
                const { data, error } = await supabase.from("User_Emails_Passwords").update({
                    session_id: rUUID,
                }).eq("email", emailInput.value);

                if (error != null)
                {
                    passwordInfoLabel.textContent = passwordInfoLabelText[3];
                    passwordInfoLabel.style.visibility = "visible";
                }
                else
                {
                    passwordInfoLabel.style.visibility = "visible";
                    passwordInfoLabel.textContent = passwordInfoLabelText[4];
                }
            }
        }
        else if (menuIndex == 1 && validityCheckCounter >= 2) { // Account creation
            
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

                if (error != null)
                {
                    passwordInfoLabel.style.visibility = "visible";
                    passwordInfoLabel.textContent = passwordInfoLabelText[3];
                }
                else
                {
                    const emailData : IVerificationEmailData = {
                        recipient: emailInput.value,
                        subject: "Email verification - DD",
                        message: "Verification code: " + verificationCode.toString(),
                    };
                    
                    const isEmailSent : string = await SendConfirmationEmail(emailData);

                    if (isEmailSent === "")
                    {
                        passwordInfoLabel.style.visibility = "hidden";
                        ResetAllInputs();
                        UpdateCrossMenuItems();

                        return;
                    }

                    menuIndex = 1;
                    ResetAllInputs();
                    ResetAllLabels(menuIndex)
                    UpdateCrossMenuItems();
                    
                    loginInputs.style.visibility = "visible";
                    passwordInfoLabel.style.visibility = "visible";
                    passwordInfoLabel.textContent = isEmailSent;
                }
            }
        }
        else if (menuIndex == 2) // Account validation
        {
            const { data: result, error } = await supabase.from("User_Emails_Passwords").select().eq("verification_code", Number(confirmPasswordInput.value));
            const JSONData = JSON.stringify(result);

            if (JSONData == null || JSONData.length <= 2)
                confirmPasswordLabel.textContent = confirmPasswordLabelText[menuIndex] + "Incorrect code!";
            else
            {
                const { data, error } = await supabase.from("User_Emails_Passwords").update({
                    is_verified: true,
                }).eq("email", currEmail);

                confirmPasswordLabel.textContent = confirmPasswordLabelText[menuIndex];

                if (error != null)
                {
                    passwordInfoLabel.textContent = passwordInfoLabelText[3];
                    passwordInfoLabel.style.visibility = "visible";
                }
                else
                {
                    confirmPassword.style.visibility = "hidden";
                    loginInputs.style.visibility = "visible";
                    passwordInfoLabel.style.visibility = "visible";
                    passwordInfoLabel.textContent = passwordInfoLabelText[5];
                    
                    menuIndex = 0;
                    ResetAllInputs();
                    ResetAllLabels(0);
                    UpdateCrossMenuItems();
                }
            }
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
