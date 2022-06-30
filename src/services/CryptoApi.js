import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const CryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: CryptoApiHeaders });

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL;

export const CryptoApi = createApi({
    reducerPath: 'CryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoDetails: builder.query({
            query: (_id) => createRequest(`/coin/${_id}`),
        }),

        getCryptoHistory: builder.query({
            query: ({ _id, timeperiod }) => createRequest(`coin/${_id}/history?timeperiod=${timeperiod}`),
        }),

        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = CryptoApi;