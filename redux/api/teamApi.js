import { baseApi } from "./baseApi";

export const teamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: (params) => ({
        url: "/team-members",
        method: "GET",
        params: {
          ...params,
        },
      }),
      providesTags: ["user"],
    }),
    getSingleUser: builder.query({
      query: ({ userId }) => ({
        url: "dashboard/users-business-statistics",
        method: "GET",
        params: {
          userId,
        },
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (userId) => {
        return {
          url: `dashboard/block-user?userId=${userId}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `dashboard/delete-user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    
  }),
});

export const {
  useGetTeamQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = teamApi;
