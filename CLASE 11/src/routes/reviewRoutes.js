import { Router} from "express";
import {getreviews, getreviewById, createreview, updatereview, deletereview} from "../controllers/reviewControllers.js";

const router = Router();

router.get('/', getreviews);
router.get('/:id', getreviewById);
router.post('/', createreview);
router.put('/:id', updatereview);
router.delete('/:id', deletereview);

export default router;