import { Request, response, Response } from "express";
import UpdateUserService from "../services/update-user.service";

class UpdateUserController{
    async handle(req: Request, res: Response){
        const updateUserService = new UpdateUserService();

        const {id, name, email} = req.body;
        if(id.length === 0){
            return response.status(400).json({mensagem: "Id não informado"});
        };        
        if(id.length === 0){
            return response.status(400).json({mensagem: "Nome não informado"});
        };

        await updateUserService.execute({id, name, email})

        return res.status(204).json();
    };
};

export default UpdateUserController;