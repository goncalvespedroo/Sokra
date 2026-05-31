import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ");

  try {
    jwt.verify(token[1], "secret");
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid tonken" });
  }
};
