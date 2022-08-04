import { Request } from "express";
import { getConnection } from "typeorm";
import createConnection from "../database";
import FakeData from "../utils/fakeData/fakeData";
import { mockResponse } from "../utils/mocks/response.mock";
import UpdateUserController from "./update-user.controller";

describe("UpdateUserController", () => {
    
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });
    
    afterAll(async () => {
        const connection = getConnection();
        await connection.query("DELETE FROM users");
        await connection.close();
    });

    const fakeData = new FakeData();

    it("Deve retornar o status 204 quando editar o usuário", async () => {
        const updateUserController = new UpdateUserController();
        
        const mockUser = await fakeData.create();        
        const req = {
            body: {
                id: mockUser.id,
                name: "someUser",
                email: "someUser@dio"
            }
        } as Request;

        const res = mockResponse();
        
        await updateUserController.handle(req, res);

        expect(res.state.status).toBe(204);       
    });

});