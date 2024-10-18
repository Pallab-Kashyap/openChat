import mongoose, {Schema,  Document, Model} from "mongoose";

interface UserI extends Document {
    name : string;
    email : string;
    password : string;
}

const userSchema: Schema<UserI> = new mongoose.Schema({
    email : {
        type : String,
        require : true,
    },
    password : {
        type: String, 
        require : true,
    }
}, { timestamps: true })

const UserModel: Model<UserI> = mongoose.model('User', userSchema)

export default UserModel;