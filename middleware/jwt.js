import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("you are not authenticated!");

  jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {
    if (error) return res.status(403).send("token is not valid!");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};
