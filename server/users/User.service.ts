import { Document, Schema, Model, model } from 'mongoose'
import { Observable } from 'rxjs';

import { IUser } from './User'

interface IUserModel extends IUser, Document {}

const UsersSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false })

const Users: Model<IUserModel> = model<IUserModel>('Users', UsersSchema)

export class UserService {

    public getAllUsers() {
        return Users.find()
    }
}