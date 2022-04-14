async function UserLogin(userData){
    let res= await fetch('https://expiredbackendapi2.azurewebsites.net/User/Login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
    let data = await res.json();
   return data;

}

async function AddUser(newUser){
    let res= await fetch('https://expiredbackendapi2.azurewebsites.net/User/AddUser', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });
    if(!res.ok)
    {
        const message = `An Error has Occured ${res.status}`
        throw new Error (message)
    }
    let data = await res.json();
   return data;
}

async function DoesUserExist(Username){
    let res = await fetch(`https://expiredbackendapi2.azurewebsites.net/User/DoesUserExist${Username}`);
    let data = await res.json();
    return data;
}

export { UserLogin, AddUser, DoesUserExist};