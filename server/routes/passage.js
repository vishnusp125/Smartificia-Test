import express from 'express';
import { getPassage, translatePassage, translatedPassage } from '../controller/passage.js';

const router = express.Router();

router.get('/passageGet', getPassage);
router.post('/translatedPassageGet', translatedPassage);
router.post('/translatePassage', translatePassage);








export default router;

