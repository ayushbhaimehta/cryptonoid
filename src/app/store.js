import { configureStore } from '@reduxjs/toolkit';

import { CryptoApi } from '../services/CryptoApi';
import { CryptonewsApi } from '../services/CryptonewsApi';


export default configureStore({
    reducer: {
        [CryptoApi.reducerPath]: CryptoApi.reducer,
        [CryptonewsApi.reducerPath]: CryptonewsApi.reducer,
    },
});