import Passages from '../models/passage.js';
import TranslatedPassages from '../models/translatedPassage.js';
import http from 'http'


export const getPassage = async (req, res) => {
    try {
        const passages = await Passages.find({});
        res.status(200).json(passages)
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
}

export const translatedPassage = async (req, res) => {
    try {
        const { text } = req.body;
        console.log(req.body);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: "Something went wrong" })
    }
}

export const translatePassage = async (req, res) => {
    try {
        const { text, language } = req.body;
        res.status(200).json(guides);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: "Something went wrong" })
    }
}

export const singlePassage = async (req, res) => {
    try {
        const passageId = req.params.id
        const passage = await Passages.findOne({ doc_id: passageId })
        res.status(200).json(passage)
    } catch (err) {
        console.log(err);
    }
}










