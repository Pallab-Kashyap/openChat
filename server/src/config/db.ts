import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/drop')
        .then(() => console.log('DB connected'))
        .catch((err) => console.log(err))
}

export default connectDB