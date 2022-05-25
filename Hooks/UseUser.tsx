import { useState } from "react";
import iUserData from "../interfaces/LoginInterfaces";
import createUser from "../interfaces/userModelInterfaces";
export default function UseUser(){
    const [userData, setUserData] = useState<iUserData[]>([])
    const [username, setUsername] = useState("");
    const [storedUser, setStoredUser] = useState("");
    const [userInfo, setUserInfo] = useState([]);
    const [userInfoGL, setUserInfoGL] = useState([]);
    const [userItems, setUserItems] = useState([]);
    const [usersGroup, setUserGroups] = useState([]);
    const [groupArrayId, setgroupArrayId] = useState([]);
    const [groupInfo, setGroupInfo] = useState([]);
    const [groupInfoForModal, setGroupInfoForModal] = useState([]);
    const [test, setTest] = useState<any>([]);
    return {userData, setUserData, setUsername, username, storedUser, setStoredUser, userInfo, setUserInfo, userItems, setUserItems, usersGroup, setUserGroups, groupArrayId, setgroupArrayId, groupInfo, setGroupInfo, groupInfoForModal, setGroupInfoForModal, test, setTest, userInfoGL, setUserInfoGL}
}