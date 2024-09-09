import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Todo"],

  endpoints: (builder) => ({
    getToDos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: `/tasks`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Todo"],
    }),

    addToDo: builder.mutation({
      query: ({ data }) => {
        console.log("data inside API", data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Todo"],
    }),

    updateToDo: builder.mutation({
      query: (data) => {
        const { id, toggleData } = data;
        console.log(data);
        return {
          url: `/task/${id}`,
          method: "PUT",
          body: toggleData,
        };
      },
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useGetToDosQuery, useAddToDoMutation, useUpdateToDoMutation } =
  todoApi;
