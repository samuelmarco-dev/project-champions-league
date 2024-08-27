import databaseClubs from '../database/clubs.js';
import ClubModel from '../models/Club.js';

const findAllClubs = async (): Promise<ClubModel[]> => {
    return databaseClubs;
};

const findClubById = async (id: number): Promise<ClubModel | null> => {
    const club = databaseClubs.find((club) => club.id === id);

    return club || null;
};

export const clubRepository = {
    findAllClubs,
    findClubById,
};
