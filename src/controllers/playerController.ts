import { Request, Response } from 'express';
import { playerService } from '../services/playerService.js';

const getAllPlayers = async (req: Request, res: Response) => {
    const { status, data } = await playerService.getAllPlayers();
    res.status(status).json(data);
};

const getPlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { status, data } = await playerService.getPlayerById(Number(id));
    res.status(status).json(data);
};

const postPlayer = async (req: Request, res: Response) => {
    const { status, data } = await playerService.postPlayer(req.body);
    res.status(status).json(data);
};

const deletePlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { status, data } = await playerService.deletePlayerById(Number(id));
    res.status(status).json(data);
};

const patchPlayerById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { status, data } = await playerService.patchPlayerById(
        Number(id),
        req.body
    );
    res.status(status).json(data);
};

export const playerController = {
    getAllPlayers,
    getPlayerById,
    postPlayer,
    deletePlayerById,
    patchPlayerById,
};
