import { Request, Response } from "express"

export const Register = (req: Request, res: Response) => {
    console.log("This is working");

    res.send(req.body);
    console.log(req.body);
}