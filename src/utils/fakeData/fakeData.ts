import CreateUserService from "../../services/create-user.service";
import { v4 as uuid } from "uuid";

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            name: "someUser",
            email: "someUser@dio"
        });
        await this.createUserService.execute({
            id: uuid(),
            name: "otherUser",
            email: ""
        });
    };

    async create(){
        const user = await this.createUserService.execute({
            id: uuid(),
            name: "someUser",
            email: "someUser@dio"
        });

        return user;
    };

};

export default FakeData;