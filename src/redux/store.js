import {ConfigureStore} from './configureStore';

import shoppingReducer from './shoppingSlice';


export const store = ConfigureStore({
    reducer: {
        shopping: shoppingReducer
    }
});