import mongoose, { Document, Schema } from 'mongoose';

type UserDocument = Document & {
    email: String;
    socket_id: String;
    name: String;
    avatar: String;
}

const UserSchema = new Schema({
    email: String,
    socket_id: String,
    name: String,
    avatar: String,
});

const User = mongoose.model<UserDocument>('Users', UserSchema);

export { User };
