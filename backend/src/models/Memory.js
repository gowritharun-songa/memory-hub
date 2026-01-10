import mongoose from 'mongoose';

const memorySchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    content: {
        type: String,
        required: true,
        maxlength: 200,
        trim: true
    },
    creator: {
        type: String,
        required: true,
        maxlength: 32
    }
}, { timestamps: true });

const Memory = mongoose.model('Memory', memorySchema);
export default Memory;