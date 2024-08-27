import StatisticsPlayer from './StatisticsPlayer.js';

interface PlayerModel {
    id: number;
    name: string;
    age: number;
    club: string;
    nationality: string;
    position: string;
    foot: string;
    statistics: StatisticsPlayer;
}

export default PlayerModel;
