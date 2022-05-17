import createUser from "../interfaces/userModelInterfaces";
import iUserData from "../interfaces/LoginInterfaces";
import iAddItem from '../interfaces/ItemInterface';
import createGroup from "../interfaces/GroupInterface";


async function AddUser(newUser: createUser){
    let res= await fetch('https://expiredbackendapi2.azurewebsites.net/User/AddUser/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function UserLogin(userInfo: iUserData){
    let res= await fetch('https://expiredbackendapi2.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
    });
    let data = await res.json();
   return data;

}

async function DoesUserExist(Username: String){
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/User/DoesUserExist/${Username}`);
    let data = await res.json();
    return data;
}

async function GetUserInfoByUsername(Username: String){
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/User/GetUserInfoByUsername/${Username}`);
    let data = await res.json();
    return data;
}

async function GetAllUserItems(userId: number){
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/Item/GetAllUserItems/${userId}`);
    let data = await res.json();
    return data;
}

async function AddItem(newItem: iAddItem){
    let res= await fetch('https://expiredbackendapi2.azurewebsites.net/Item/AddItem/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function DeleteItem(itemId: number){
    let res= await fetch(`https://expiredbackendapi2.azurewebsites.net/Item/DeleteItem/${itemId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemId)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function UpdateItem(updateItem: iAddItem){
    let res= await fetch(`https://expiredbackendapi2.azurewebsites.net/Item/UpdateItem`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateItem)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function UpdateUsername(id : number, newUsername: any){
    let res= await fetch(`https://expiredbackendapi2.azurewebsites.net/User/UpdateUser/${id}/${newUsername}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({})
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function GetUsersFromGroup(aNumber: String){
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/User/GetUsersFromGroup/${aNumber}`);
    let data = await res.json();
    return data; 
}

async function GetGroupById(Id:number) {
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/Group/GetGroupById/${Id}`);
    let data = await res.json();
    return data; 
    
}

async function GetGroupsByUserId(userId: string){
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/Group/GetGroupsByUserId/${userId}`);
    let data = await res.json();
    return data;
}

async function AddGroup(newGroup: createGroup){
    let res= await fetch('https://expiredbackendapi2.azurewebsites.net/Group/AddGroup/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGroup)
    });
    if(!res.ok)
    {
        const message = `An Error has Occurred ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}
export { UserLogin, AddUser, DoesUserExist, GetUserInfoByUsername, GetAllUserItems, AddItem, DeleteItem, UpdateItem, UpdateUsername, GetUsersFromGroup, GetGroupById, GetGroupsByUserId, AddGroup};
