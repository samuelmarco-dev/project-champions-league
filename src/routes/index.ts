import { Router } from 'express';
import PlayerRoutes from './PlayerRoutes.js';
import ClubRoutes from './ClubRoutes.js';

const routes = Router();
routes.use('/api/players', PlayerRoutes);
routes.use('/api/clubs', ClubRoutes);

export default routes;
