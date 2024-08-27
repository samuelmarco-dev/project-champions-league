import { StatusCode } from './StatusCode.js';

export const validateId = (id: number) => {
    if (id <= 0 || isNaN(id)) {
        return {
            status: StatusCode.BAD_REQUEST,
            data: 'Invalid ID provided',
        };
    } else {
        return null;
    }
};
