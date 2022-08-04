import { Router, Request, Response } from "express";
import CreateUserController from "./controllers/create-user.controller";
import DeleteUserController from "./controllers/delete-user.controller";
import GetAllUsersController from "./controllers/get-all-users.controller";
import UpdateUserController from "./controllers/update-user.controller";

const router = Router();
const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get("/", (req: Request, res: Response) => {
    return res.json({mensagem:"Bem vindo a API"});
});

router.post("/users", createUserController.handle);
router.get("/users", getAllUsersController.handle);
router.patch("/users", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

export default router;