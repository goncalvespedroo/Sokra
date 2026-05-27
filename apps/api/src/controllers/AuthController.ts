import { Request, Response } from "express";
import User from "../entities/Users";
import { AppDataSource } from "../database";
import bcrypt from "bcrypt";

export class AuthController {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const existingUser = await userRepository.findOneBy({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "This email is already in use." });
    }

    const saltRound = 10;
    const passwordHash = await bcrypt.hash(password, saltRound);

    const newUser = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    await userRepository.save(newUser);

    const { password: _, ...userWithoutPassword } = newUser;

    return res.status(201).json(userWithoutPassword);
  }
}
