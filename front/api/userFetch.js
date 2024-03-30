
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
    return users;   
};


export const updateUser = async (id, bodyParam) => {
    console.log("este es el id y el bodyParam del updateuser del userfetch", id, bodyParam)
    const response = await fetch("http://localhost:9000/users/" + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyParam,
  });
  const userUpdated = await response.json();
  console.log("este es el userUpdated del userfetch", userUpdated)
  if (userUpdated.error) {
    console.log(userUpdated.error);
    return userUpdated;
  }
  console.log(userUpdated);
  return userUpdated;

}


