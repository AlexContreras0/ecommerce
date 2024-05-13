const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    const token = req.header("auth-token");
    const tokenRefresh = req.header("auth-token-refresh");
    if (!token) return res.status(401).send("Access denied")

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next()
                
    } catch (error) {
        try {
            const verified = jwt.verify(tokenRefresh, process.env.TOKEN_REFRESH)
            req.user = verified
            next()
            
        } catch (error) {
            return res.status(400).send("Expired Token")
        }
        
    }
}

module.exports = verifyToken