import { container } from "tsyringe";
import { io } from "../http";
import { CreateUserService } from "../services/CreateUserService";

io.on('connect', socket => {
    socket.on('start', async data => {
        const { id: socket_id } = socket;
        const { name, email, avatar } = data;

        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({ 
            name, 
            email, 
            avatar, 
            socket_id 
        });

        console.log(user);
    });
});
