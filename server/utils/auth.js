// const secretpw = require('dotenv')

const jwt = require('jsonwebtoken');
const secret = "password123"
const expiration = '1h'

module.exports = {
    authMiddleware: function({ req }) {
      let token = req.headers.authorization || req.body.token || req.query.token
  
      if (req.headers.authorization) {
        token = token
      

      }
  
      if (!token) {
        return req;}
  
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        req.user = data;
      } catch {
        console.log('Wrong token!');
      }

      return req;
    },

    signToken: function({ _id, username, email, }) {
      const payload = {  _id, username, email, };
  
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
  }