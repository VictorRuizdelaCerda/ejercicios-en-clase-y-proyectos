import { Router} from "express";
import {getusers, getuserById, createuser, updateuser, deleteuser} from "../controllers/userControllers.js";

const router = Router();

router.get('/', getusers);
router.get('/:id', getuserById);
router.post('/', createuser);
router.put('/:id', updateuser);
router.delete('/:id', deleteuser);

export default router;