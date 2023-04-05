import Passages from '../models/passage.js';
import TranslatedPassages from '../models/translatedPassage.js';


export const getPassage = async (req, res) => {
    try {
        const guides = await Passages.find({});
        res.status(200).json(guides)
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
}

export const translatedPassage = async (req, res) => {
    try {
        const { text } = req.body;
        console.log(req.body);
        // const guides = await TranslatedPassages.find({});
        // res.status(200).json(guides)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Something went wrong" })
    }
}

export const translatePassage = async (req, res) => {
    try {
        const { text, language } = req.body;  
        console.log(req.body);
        res.status(200).json(guides);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
    }
}



