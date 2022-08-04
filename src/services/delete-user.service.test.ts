import { getConnection } from "typeorm";
import createConnection from "../database";
import FakeData from "../utils/fakeData/fakeData";
import DeleteUserService from "./delete-user.service";

describe("UpdateUserService", () => {

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

    it("Deve retornar um array vazio ao excluir o usuário", async () => {
        const mockUser = await fakeData.create();

        const deleteUserService = new DeleteUserService();
        const result = await deleteUserService.execute({id: mockUser.id});

        expect(result).toHaveLength(0);
    });

});