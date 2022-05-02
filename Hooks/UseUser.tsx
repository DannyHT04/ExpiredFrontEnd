import { useState } from "react";
import IuserData from "../interfaces/LoginInterfaces";
import createUser from "../interfaces/userModelInterfaces";
export default function UseUser(){
    const [userData, setUserData] = useState<IuserData[]>([])
    return {userData, setUserData}
}