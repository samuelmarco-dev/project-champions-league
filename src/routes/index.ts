import { Router } from 'express';
import PlayerRouter from './PlayerRoutes.js';
import ClubRouter from './ClubRoutes.js';

const router = Router();
router.use('/api/players', PlayerRouter);
router.use('/api/clubs', ClubRouter);

export default router;
