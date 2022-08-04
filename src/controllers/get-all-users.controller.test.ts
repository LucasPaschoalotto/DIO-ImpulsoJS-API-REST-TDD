import { getConnection } from "typeorm";
import createConnection from "../database";
import FakeData from "../utils/fakeData/fakeData";
import { mockRequest } from "../utils/mocks/request.mock";
import { mockResponse } from "../utils/mocks/response.mock";
import GetAllUsersController from "./get-all-users.controller";

describe("GetAllUsersController", () => {
    
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

    it("Deve retornar status 200 quando pegar todos os usuários", async () => {
        await fakeData.execute();

        const getAllUsersController = new GetAllUsersController();
        const req = mockRequest({});
        const res = mockResponse();

        await getAllUsersController.handle(req, res);
        
        expect(res.state.status).toBe(200);
    });
});