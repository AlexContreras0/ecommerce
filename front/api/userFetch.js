export const createUser = async (bodyParam) => {
    console.log("este es el bodyParam del createUser", bodyParam)
    const response = await fetch("http://localhost:9000/users/",
    {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: bodyParam,
    })
    const userCreated = await response.json()
    console.log("este es el response.json", response.json)
    if (userCreated.error) {
        return userCreated.error
    }
    return
}