import { Request, Response } from "express";
import GetAllUsersService from "../services/get-all-users.service";

class GetAllUsersController{
    async handle(req: Request, res: Response){
        const getAllUsersService = new GetAllUsersService();
        const users = await getAllUsersService.execute();

        return res.status(200).json(users);
    };
};

export default GetAllUsersController;