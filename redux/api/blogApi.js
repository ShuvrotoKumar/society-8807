import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiBaseUrl } from "../../config/envConfig";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: getApiBaseUrl(),
  }),
  tagTypes: ["blog"],
  endpoints: (builder) => ({
    get_all_blogs: builder.query({
      query: () => "/blogs",
      providesTags: ["blog"],
    }),
    add_blog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    update_blog: builder.mutation({
      query: ({ blogId, data }) => ({
        url: `/blogs/${blogId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    delete_blog: builder.mutation({
      query: (blogId) => ({
        url: `/blogs/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGet_all_blogsQuery,
  useAdd_blogMutation,
  useUpdate_blogMutation,
  useDelete_blogMutation,
} = blogApi;
