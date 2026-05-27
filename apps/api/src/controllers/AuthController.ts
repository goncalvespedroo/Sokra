import { DataSource } from "typeorm";
import { Request, Response } from "express";
import User from "../entities/Users";
import { AppDataSource } from "../database";

export class AuthController {
  async register(req: Request, res: Response) {
    const { nome, email, senha } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const existingUser = await userRepository.findOneBy({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "This email is already in use." });
    }
  }
}
