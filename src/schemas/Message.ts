import { Document, Schema, model } from 'mongoose';

type Message = Document & {
    to: String;
    text: String;
    created_at: Date;
    roomId: String;
};

const MessageSchema = new Schema({
    to: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    text: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    roomId: {
        type: String,
        ref: 'ChatRooms'
    },
});

const Message = model<Message>('Messages', MessageSchema);

export { Message };
