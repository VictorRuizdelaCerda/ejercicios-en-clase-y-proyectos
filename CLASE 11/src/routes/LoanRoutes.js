import { Router} from "express";
import {getLoans, getLoanById, createLoan, updateLoan, deleteLoan} from "../controllers/LoanControllers.js";

const router = Router();

router.get('/', getLoans);
router.get('/:id', getLoanById);
router.post('/', createLoan);
router.put('/:id', updateLoan);
router.delete('/:id', deleteLoan);

export default router;