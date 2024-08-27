import databasePlayers from '../database/players.js';
import InsertPlayer from '../models/InsertPlayer.js';
import PlayerModel from '../models/Player.js';
import StatisticsPlayer from '../models/StatisticsPlayer.js';

const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return databasePlayers;
};

const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
    const player = databasePlayers.find((player) => player.id === id);

    return player || null;
};

const findPlayerByName = async (name: string): Promise<PlayerModel | null> => {
    const player = databasePlayers.find((player) => player.name === name);

    return player || null;
};

const insertPlayer = async (data: InsertPlayer) => {
    const length = (await findAllPlayers()).length;

    databasePlayers.push({
        id: length + 1,
        ...data,
    });
};

const removePlayerById = async (id: number) => {
    const index = databasePlayers.findIndex((player) => player.id === id);

    if (index !== -1) {
        databasePlayers.splice(index, 1);
    }
};

const updatePlayerById = async (id: number, statistics: StatisticsPlayer) => {
    const index = databasePlayers.findIndex((player) => player.id === id);

    if (index !== -1) {
        databasePlayers[index] = {
            ...databasePlayers[index],
            statistics: {
                ...statistics,
            },
        };
    }
};

export const playerRepository = {
    findAllPlayers,
    findPlayerById,
    findPlayerByName,
    insertPlayer,
    removePlayerById,
    updatePlayerById,
};
