
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

// el cors me bloquea el fetch, y si le pongo un mode: 'no-cors' no me da respuesta y pasa datos

//nueva prueba


    console.log(user)
    const user = await response.json()

    if (user.error) {
        return user.error
    }
    return     

}