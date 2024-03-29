
export const createUser = async (bodyParam) => {
    const response = await fetch("http://localhost:9000/users/",
    {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyParam,
    })
    const userCreated = await response.json()
    if (userCreated.error) {
        return userCreated.error
    }
    return
}

export const login = async (bodyParam) => {
       
    const response = await fetch("http://localhost:9000/users/login/",
         {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: bodyParam,
         })

const user = await response.json()

    if (user.error) {
        return user.error
    }
    return user

}

export const getUsers = async (bodyParam) => {
    
    const response = await fetch("http://localhost:9000/users/");
    const users = await response.json();
    if (users.error) {
        return users.error
    }
    // const userfiltered = users.data.filter((user) => user.userEmail == bodyParam.email)
    // const user = userfiltered[0]
    return users;   
};



