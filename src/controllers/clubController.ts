import { Request, Response } from 'express';
import { clubService } from '../services/clubService.js';

const getAllClubs = async (req: Request, res: Response) => {
    const { status, data } = await clubService.getAllClubs();
    res.status(status).json(data);
};

const getClubById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { status, data } = await clubService.getClubById(Number(id));
    res.status(status).json(data);
};

export const clubController = {
    getAllClubs,
    getClubById,
};
