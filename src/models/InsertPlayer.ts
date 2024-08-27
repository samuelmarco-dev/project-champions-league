import PlayerModel from './Player.js';

type InsertPlayer = Omit<PlayerModel, 'id'>;

export default InsertPlayer;
