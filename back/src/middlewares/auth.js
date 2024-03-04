const jwt = require("jsonwebtoken")

const verifyToken = (req, rest, next) => {
    const token = req.params.token
    if (!token) return rest.status(401).send("Access denied")

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
                
    } catch (error) {
        try {
            const verified = jwt.verify(token, process.env.TOKEN_REFRESH)
            req.user = verified
            next()
            
        } catch (error) {
            res.status(400).send("Expired Token")
        }
        
    }
}

module.exports = verifyToken