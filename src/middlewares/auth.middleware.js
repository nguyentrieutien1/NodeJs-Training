const { NotFound, BadRequestError } = require("../core/error.response");
const { Token } = require("../modules/token/token.model");
const { User } = require("../modules/user/user.model");
const userService = require("../modules/user/user.service");
const JWT = require("jsonwebtoken");
const checkAuth = async (req, res, next) => {
  try {
    const accessToken = req.headers["authorization"].split(" ")[1];
    const userId = req.headers["x-client-id"];
    const token = await Token.findOne({ user: userId });
    if (!token) {
      throw new NotFound("User token not found  !", { userId });
    }
    const decode = await JWT.verify(accessToken, token.publicKey);
    if (!decode) {
      throw new BadRequestError("Your token has expired !");
    }
    req.user = decode;
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { checkAuth };
