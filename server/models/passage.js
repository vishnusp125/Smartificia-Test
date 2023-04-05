import mongoose from 'mongoose'

const passageSchema = mongoose.Schema(
    {
        doc_id: {
            type: Number
        },
        passage: {
            type: String,
        },
        author: {
            type: String,
        },
        format: {
            type: String,
        },
        title: {
            type: String,
        },
        year: {
            type: Object,
        },
       
    },{
        timestamps: true,
    }
);

export default mongoose.model("passages", passageSchema)