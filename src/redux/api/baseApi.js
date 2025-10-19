import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import { logout, setUser } from '../features/auth/authSlice';
import { toast } from 'sonner';
const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `${token}`);
        }
        return headers;
    },
});
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 404) {
        toast.error(result?.error?.data?.message);
    }
    if (result?.error?.status === 403) {
        toast.error(result?.error?.data?.message);
    }
    if (result?.error?.status === 401) {
        //* Send Refresh
        console.log('Sending refresh token');
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
            method: 'POST',
            credentials: 'include',
        });
        const data = await res.json();
        if (data?.data?.accessToken) {
            const user = api.getState().auth.user;
            api.dispatch(setUser({
                user,
                token: data.data.accessToken,
            }));
            result = await baseQuery(args, api, extraOptions);
        }
        else {
            api.dispatch(logout());
        }
    }
    return result;
};
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ["user"],
    endpoints: () => ({}),
});
