import { Router} from "express";

import authorRoutes from "./authorRoutes.js";
import bookRoutes from "./bookRoutes.js";
import userRoutes from "./userRoutes.js";
import reviewRoutes from "./reviewRoutes.js";
import loanRoutes from "./LoanRoutes.js";

const router = Router();
router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/loans', loanRoutes);

export default router;