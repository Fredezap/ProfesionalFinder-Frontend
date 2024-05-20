import { create } from 'zustand';
import routes from '../models/routes.json';

// See if this store is neccesary or not.
export const createRoutesSlice = create(() => ({
    routes: routes,
}));
