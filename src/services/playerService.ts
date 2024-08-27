import { playerRepository } from '../repositories/playerRepository.js';
import InsertPlayer from '../models/InsertPlayer.js';
import PlayerModel from '../models/Player.js';
import StatisticsPlayer from '../models/StatisticsPlayer.js';
import { StatusCode } from '../utils/StatusCode.js';
import { validatePlayerData } from '../utils/validatePlayerData.js';
import { validateId } from '../utils/validateId.js';

const getAllPlayers = async (): Promise<
    | {
          status: StatusCode;
          data: PlayerModel[];
      }
    | {
          status: StatusCode;
          data: string;
      }
> => {
    const players = await playerRepository.findAllPlayers();

    return players
        ? {
            status: StatusCode.OK,
            data: players,
        }
        : {
            status: StatusCode.NO_CONTENT,
            data: 'Players not found',
        };
};

const getPlayerById = async (
    id: number
): Promise<
    | {
          status: StatusCode;
          data: PlayerModel;
      }
    | {
          status: StatusCode;
          data: string;
      }
> => {
    const validationId = validateId(id);
    if (validationId) return validationId;

    const player = await playerRepository.findPlayerById(id);

    return player
        ? {
            status: StatusCode.OK,
            data: player,
        }
        : {
            status: StatusCode.NOT_FOUND,
            data: 'Player not found',
        };
};

const postPlayer = async (
    data: InsertPlayer
): Promise<{
    status: StatusCode;
    data: string;
}> => {
    const validationData = validatePlayerData(data);
    if (validationData) return validationData;

    const findPlayer = await playerRepository.findPlayerByName(data.name);
    if (findPlayer) {
        return {
            status: StatusCode.CONFLICT,
            data: 'Player already exists',
        };
    }

    await playerRepository.insertPlayer(data);
    return {
        status: StatusCode.CREATED,
        data: 'Player created',
    };
};

const deletePlayerById = async (
    id: number
): Promise<{
    status: StatusCode;
    data: string;
}> => {
    const validationId = validateId(id);
    if (validationId) return validationId;

    const player = await playerRepository.findPlayerById(id);
    if (!player) {
        return {
            status: StatusCode.NOT_FOUND,
            data: 'Player not found',
        };
    }

    await playerRepository.removePlayerById(id);
    return {
        status: StatusCode.OK,
        data: 'Player deleted',
    };
};

const patchPlayerById = async (
    id: number,
    statistics: StatisticsPlayer
): Promise<{
    status: StatusCode;
    data: string;
}> => {
    const validationId = validateId(id);
    if (validationId) return validationId;

    const player = await playerRepository.findPlayerById(id);
    if (!player) {
        return {
            status: StatusCode.NOT_FOUND,
            data: 'Player not found',
        };
    }

    await playerRepository.updatePlayerById(id, statistics);
    return {
        status: StatusCode.OK,
        data: 'Player updated',
    };
};

export const playerService = {
    getAllPlayers,
    getPlayerById,
    postPlayer,
    deletePlayerById,
    patchPlayerById,
};
