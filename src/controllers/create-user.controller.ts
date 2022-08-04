import { Request, Response } from "express";
import { v4 as uuid} from "uuid";
import CreateUserService from "../services/create-user.service";


class CreateUserController {
    async handle(req: Request, res: Response) {
        const createUserService = new CreateUserService();

        const name = req.body.name;
        const email = req.body.email;
        const id = uuid();
        if(name.length === 0){
            return res.status(400).json({mensagem: "Nome obrigatório"});
        }

        const user = await createUserService.execute({id, name, email});
        return res.status(201).json(user);
    }
};

export default CreateUserController;