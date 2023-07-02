import mongoose from "mongoose";

const { Schema, model, models } = mongoose

const userSchema = new Schema ({
    name: {
        type: String,
        unique: [true, 'Username has been taken!'],
        required: [true, 'Username is required!'],
    },
    email: {
        type: String,
        unique: [true, 'Email has been taken!'],
        required: [true, 'Email is required!'],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
    },
}, { timestamps: true })

const User = models.User || model("User", userSchema);

export default User;