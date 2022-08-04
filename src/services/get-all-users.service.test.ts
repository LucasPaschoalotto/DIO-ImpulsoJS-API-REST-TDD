import { getConnection } from "typeorm";
import createConnection from "../database";
import FakeData from "../utils/fakeData/fakeData";
import GetAllUsersService from "./get-all-users.service";

describe("GetAllUsersService", () => {

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
    
    it("Deve retornar todos os usuários cadastrados no DB", async () => {

        await fakeData.execute();

        const expectedRes = [
            {
                name: "someUser",
                email: "someUser@dio"                
            },
            {
                name: "otherUser",
                email: ""
            }
        ];
        const getAllUsersService = new GetAllUsersService();

        const result = await getAllUsersService.execute();
        
        expect(result).toMatchObject(expectedRes);
    });

});