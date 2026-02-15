import { baseApi } from "./baseApi";

export const appointmentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAppointment: builder.mutation({
      query: (params) => ({
        url: "appointments",
        method: "POST",
        body: params,
      }),
      providesTags: ["appointment"],
    }),
  }),
});

export const { useCreateAppointmentMutation } = appointmentsApi;
