import mongoose from 'mongoose'

const translatedPassageSchema = mongoose.Schema(
    {
        doc_id: {
            type: Object
        },
        passage_en: {
            type: String,
        },
        passage_es: {
            type: String,
        },
        passage_fr: {
            type: String,
        },
        passage_de: {
            type: String,
        },
        author_en: {
            type: String,
        },
        format_en: {
            type: String,
        },
        title_en: {
            type: String,
        },
        year: {
            type: Object,
        },
       
    },{
        timestamps: true,
    }
);

export default mongoose.model("passages_translated", translatedPassageSchema)