import { Request } from "express";
import { getConnection } from "typeorm";
import createConnection from "../database";
import FakeData from "../utils/fakeData/fakeData";
import { mockRequest } from "../utils/mocks/request.mock";
import { mockResponse } from "../utils/mocks/response.mock";
import DeleteUserController from "./delete-user.controller";

describe("UpdateUserController", () => {
    
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });
    
    afterAll(async () => {
        const connection = getConnection();
        await connection.close();
    });

    const fakeData = new FakeData();

    it("Deve retornar o status 204 quando excluir o usuário", async () => {
        const deleteUserController = new DeleteUserController();
        
        const mockUser = await fakeData.create();        
        const req = mockRequest({
            params: {
                id: mockUser.id
            }
        });
        const res = mockResponse();
        
        await deleteUserController.handle(req, res);

        expect(res.state.status).toBe(204);       
    });

});