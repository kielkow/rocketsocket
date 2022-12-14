import { model, Document, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { User } from './User';

type ChatRoom = Document & {
    idUsers: User[];
    idChatRoom: string;
}

const ChatRoomSchema = new Schema({
    idUsers: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Users',
        },
    ],
    idChatRoom: {
        type: String,
        default: uuid,
    },
});

const ChatRoom = model<ChatRoom>('ChatRooms', ChatRoomSchema);

export { ChatRoom };
