import { clubRepository } from '../repositories/clubRepository.js';
import ClubModel from '../models/Club.js';
import { StatusCode } from '../utils/StatusCode.js';
import { validateId } from '../utils/validateId.js';

const getAllClubs = async (): Promise<
    | {
          status: StatusCode;
          data: ClubModel[];
      }
    | {
          status: StatusCode;
          data: string;
      }
> => {
    const clubs = await clubRepository.findAllClubs();

    return clubs
        ? {
            status: StatusCode.OK,
            data: clubs,
        }
        : {
            status: StatusCode.NO_CONTENT,
            data: 'Clubs not found',
        };
};

const getClubById = async (
    id: number
): Promise<
    | {
          status: StatusCode;
          data: string;
      }
    | {
          status: StatusCode;
          data: ClubModel;
      }
> => {
    const validationId = validateId(id);
    if (validationId) return validationId;

    const club = await clubRepository.findClubById(id);

    return club
        ? {
            status: StatusCode.OK,
            data: club,
        }
        : {
            status: StatusCode.NOT_FOUND,
            data: 'Club not found',
        };
};

export const clubService = {
    getAllClubs,
    getClubById,
};
