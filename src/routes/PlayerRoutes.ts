import { Router } from 'express';
import { playerController } from '../controllers/playerController.js';

const PlayerRoutes = Router();

PlayerRoutes.get('/', playerController.getAllPlayers);
PlayerRoutes.get('/:id', playerController.getPlayerById);
PlayerRoutes.post('/', playerController.postPlayer);
PlayerRoutes.delete('/:id', playerController.deletePlayerById);
PlayerRoutes.patch('/:id', playerController.patchPlayerById);

export default PlayerRoutes;
