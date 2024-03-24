
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

    console.log("este es el bodyParam de antes del fetch", bodyParam)
       
    const response = await fetch("http://localhost:9000/users/login/",
         {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: bodyParam,
         })

// el cors me bloquea el fetch, y si le pongo un mode: 'no-cors' no me da respuesta y no pasa datos

const user = await response.json()
console.log(user)

    if (user.error) {
        return user.error
    }
    return    

}

export const getUsers = async (bodyParam) => {

    // sustituto del login hasta solucionar el problema del fetch
    
    const response = await fetch("http://localhost:9000/users/");
    const users = await response.json();
    if (users.error) {
        return users.error
    }
    const userfiltered = users.data.filter((user) => user.userEmail == bodyParam.email)
    const user = userfiltered[0]
    return user;   
};



