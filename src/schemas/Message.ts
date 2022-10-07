import mongoose, { Document, Schema } from 'mongoose';

type MessageDocument = Document & {
    to: String;
    text: String;
    created_at: Date;
    roomId: String;
}

const MessageSchema = new Schema({
    to: {
        type: Schema.Types.ObjectId,
        refId: 'Users'
    },
    text: String,
    created_at: {
        type: Date,
        default: Date.now()
    },
    roomId: {
        type: String,
        refId: 'ChatRoom'
    },
});

const Message = mongoose.model<MessageDocument>('Messages', MessageSchema);

export { Message };
