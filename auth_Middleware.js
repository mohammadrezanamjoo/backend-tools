
const jwt = require('jsonwebtoken');
function authenticateJWT(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

module.exports = { authenticateJWT };
