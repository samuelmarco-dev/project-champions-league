import InsertPlayer from '../models/InsertPlayer.js';
import { StatusCode } from './StatusCode.js';

export const validatePlayerData = (
    data: Partial<InsertPlayer>
): { status: StatusCode; data: string } | null => {
    const { name, age, club, nationality, position, foot, statistics } = data;
    const missingFields = [];

    if (!name) missingFields.push('name');
    if (!age) missingFields.push('age');
    if (!club) missingFields.push('club');
    if (!nationality) missingFields.push('nationality');
    if (!position) missingFields.push('position');
    if (!foot) missingFields.push('foot');
    if (!statistics) missingFields.push('statistics');

    if (missingFields.length > 0) {
        return {
            status: StatusCode.BAD_REQUEST,
            data: `Missing required fields: ${missingFields.join(', ')}`,
        };
    }

    const statsKeys = [
        'overall',
        'pace',
        'shooting',
        'passing',
        'dribbling',
        'defending',
        'physical',
    ];

    const invalidStats = statsKeys.filter(
        (key) =>
            typeof statistics![key] !== 'number' ||
            statistics![key] < 0 ||
            statistics![key] > 100
    );

    if (invalidStats.length > 0) {
        return {
            status: StatusCode.BAD_REQUEST,
            data: `Invalid or out of range values in statistics: ${invalidStats.join(', ')}`,
        };
    }

    if (!age || age <= 0) {
        return {
            status: StatusCode.BAD_REQUEST,
            data: 'Age must be a positive number',
        };
    }

    if (!foot || ['Right', 'Left'].indexOf(foot) === -1) {
        return {
            status: StatusCode.BAD_REQUEST,
            data: 'Foot must be either "Right" or "Left"',
        };
    }

    // All validations passed
    return null;
};
