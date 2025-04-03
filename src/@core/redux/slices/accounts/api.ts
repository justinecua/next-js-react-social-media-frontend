import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_HOST } from "@/@core/constants/page";

const timeout = 60000;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_HOST}/api/`,
    timeout: timeout,
  }),
  endpoints: (builder) => ({
    newUsers: builder.query({
      query: () => "/accounts/getNewUsers/",
    }),
    getPosts: builder.query({
      query: () => "posts/getPosts/",
    }),
  }),
});

// Export hooks
export const { useNewUsersQuery, useGetPostsQuery } = apiSlice;
