interface StatisticsPlayer {
    overall: number;
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
    defending: number;
    physical: number;

    [key: string]: number;
}

export default StatisticsPlayer;
