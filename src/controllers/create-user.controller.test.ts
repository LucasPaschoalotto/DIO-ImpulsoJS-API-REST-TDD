import { Request } from "express";
import { getConnection } from "typeorm";
import createConnection from "../database";
import { mockResponse } from "../utils/mocks/response.mock";
import CreateUserController from "./create-user.controller";

describe("CreateUserController", () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });
    
    afterAll(async () => {
        const connection = getConnection();
        await connection.query("DELETE FROM users");
        await connection.close();
    });
    
    const createUserController = new CreateUserController();
    const res = mockResponse();

    it("Deve retornar status 201 com a criação do usuário", async () => {
        const req = {
            body: {
                name: "someUser",
                email: "someUser@dio"
            }
        } as Request;
        
        await createUserController.handle(req, res);
        
        expect(res.state.status).toBe(201);
    });
    
    it("Deve retornar status 201 quando o email não for informado", async () => {
        const req = {
            body: {
                name: "someUser",
                email: ""
            }
        } as Request;

        await createUserController.handle(req, res);

        expect(res.state.status).toBe(201);
    });

    it("Deve retornar status 400 quando o nome não for informado", async () => {
        const req = {
            body: {
                name: "",
                email: "someUser@dio"
            }
        } as Request;

        await createUserController.handle(req, res);
        expect(res.state.status).toBe(400);
    });

});