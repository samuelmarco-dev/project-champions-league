import { Router } from 'express';
import { clubController } from '../controllers/clubController.js';

const ClubRoutes = Router();

ClubRoutes.get('/', clubController.getAllClubs);
ClubRoutes.get('/:id', clubController.getClubById);

export default ClubRoutes;
