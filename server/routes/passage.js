import express from 'express';
import { getPassage, singlePassage, translatePassage, translatedPassage } from '../controller/passage.js';

const router = express.Router();

router.get('/passageGet', getPassage);
router.post('/translatedPassageGet', translatedPassage);
router.post('/translatePassage', translatePassage);
router.get('/singlePassage/:id', singlePassage);





export default router;

