"use server"
import React, { useState, useEffect } from "react";
import { supabase, minPasswordChars, maxPasswordChars, salt, IVerificationEmailData, IDBUserData} from "../supabase";

export interface IDBCharacterData {
    id_character_name: string;
    id: number;
    character_name: string;
    class_name: string;
    race_data: string;
    skills_data: string;
    spells_data: string;
    ability_data: string;
}

const GetUserID = async (in_sessionID : string) => {
    if (in_sessionID == null)
        return -1;

    const { data: emailResult, } = await supabase.from("User_Emails_Passwords").select().eq("session_id", in_sessionID);
    const JSONData = JSON.stringify(emailResult);
    
    if (JSONData == null || JSONData.length <= 2)
        return -1;

    const userIDs: number[] = emailResult?.map(user => user.id) || [];
    if (userIDs.length == 0)
        return -1;

    return userIDs[0];
}

export const GetIsValidSession = async (in_sessionID : string) => {
    const userID = await GetUserID(in_sessionID);

    return (userID < 0) ? false : true;
}

export const GetIfCharacterAlreadyExists = async (in_characterName : string, in_sessionID: string) => {
    if (in_sessionID == null)
        return -1;
    if (in_characterName === "")
        return -1;

    const userID = await GetUserID(in_sessionID);
    if (userID == -1)
        return -1;

    const idCharacterName = userID.toString() + in_characterName;
    const { data: result, error } = await supabase.from("User_Characters").select().eq("id_character_name", idCharacterName);
    const JSONData = JSON.stringify(result);

    if (JSONData.length <= 2)
        return 1;

    return 0;
}

export const StoreCharacterData = async (in_sessionID : string, in_characterData : IDBCharacterData) => {
    const userID = await GetUserID(in_sessionID) || -1;

    if (userID < 0)
        return "Invalid session, please try logging in.";

    in_characterData.id = userID;
    in_characterData.id_character_name = userID.toString() + in_characterData.character_name;
    const { data: result, error } = await supabase.from("User_Characters").upsert(in_characterData);
    
    if (error != null)
        return error.message;
    
    return "";
}

export const GetCharacterData = async (in_sessionID : string) => {
    const userID = await GetUserID(in_sessionID);

    if (userID < 0)
        return [];

    const { data: result, error } = await supabase.from("User_Characters").select().eq("id", userID);
    const JSONData = JSON.stringify(result);

    if (error != null || JSONData.length <= 2)
        return []

    let retVal : IDBCharacterData[] = [];
    for (let i = 0; i < result.length; i++)
    {
        const tempJSONData = JSON.stringify(result);
        console.log(JSON.parse(result[i]) as IDBCharacterData);
        retVal.push(JSON.parse(result[i]) as IDBCharacterData);
    }

    return retVal;
}