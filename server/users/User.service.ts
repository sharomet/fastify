import mongoose, { Schema, Model, model, DocumentQuery } from 'mongoose'
import { Observable } from 'rxjs';

import { IUser } from './User'

const UsersSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now }
}, { versionKey: false })

const Users: Model<IUser> = model<IUser>('Users', UsersSchema)

export class UserService {

    public getAllUsers(): DocumentQuery<IUser[], IUser, {}> {
        return Users.find()
    }

    public addUser(data: any) {
        const user = new Users ({
            name: data.name,
            email: data.email,
            password: 'admin12345',
            role: 3,
            updated_at: new Date(),
            created_at: new Date()
        });
        return user.save();
    }
}