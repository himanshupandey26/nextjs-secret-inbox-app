import mongoose, {Schema,Document} from "mongoose";

export interface Message extends Document{ // ts ke wajah se
    content: string;
    createdAt:Date
}

// const MessageSchema = new Schema({ // without ts
// })

const MessageSchema: Schema<Message>  = new Schema({
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now,
    },
})


export interface User extends Document {
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean,
    isAcceptingMessage:boolean;
    messages:Message[];
}

const UserSchema: Schema<User> = new Schema({
    username:{
        type:String,
        // required:true,
        required:[true,"username is required"],
        trim:true,
        unique:true,
    },
    email:{ 
        type:String,
        required:[true,"email is requied"],
        unique:true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email.'], // ✔️ 1. Regex pattern → /^\S+@\S+\.\S+$/ for Email validation: email allowed format me hai ya nahi? LINK:https://regexr.com/
    },
    password:{
        type:String,
        required:[true,"Password is requied."],
    },
    verifyCode:{
        type:String,
        required:[true,"Verify code is requied."],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"Verify code expiry is requied."],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    },
    messages: [MessageSchema],

})


const UserModel = (mongoose.models.user as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;