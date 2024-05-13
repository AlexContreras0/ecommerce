
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

export const getUserById = async (id) => {
    const response = await fetch("http://localhost:9000/users/" + id);
    const user = await response.json();
    return user;
};

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
    const response = await fetch("http://localhost:9000/users/" + id, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyParam,
  });
  const userUpdated = await response.json();
  if (userUpdated.error) {
    console.log(userUpdated.error);
    return userUpdated;
  }
  return userUpdated;

}


