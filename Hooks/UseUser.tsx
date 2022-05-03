import { useState } from "react";
import iUserData from "../interfaces/LoginInterfaces";
import createUser from "../interfaces/userModelInterfaces";
export default function UseUser(){
    const [userData, setUserData] = useState<iUserData[]>([])
    const [username, setUsername] = useState("");
    const [storedUser, setStoredUser] = useState("")
    return {userData, setUserData, setUsername, username, storedUser, setStoredUser}
}