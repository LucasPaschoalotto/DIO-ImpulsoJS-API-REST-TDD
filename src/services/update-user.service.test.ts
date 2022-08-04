import { getConnection } from "typeorm";
import createConnection from "../database";
import FakeData from "../utils/fakeData/fakeData";
import UpdateUserService from "./update-user.service";

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

    it("Deve editar o nome do usuário", async () => {
        const fakeUser = await fakeData.create();
        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({
            id: fakeUser.id,
            name: "otherUser"
        });

        expect(result).toHaveLength(0);
    });

});