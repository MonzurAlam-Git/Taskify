import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
    }),
    addToDo: builder.mutation({
      query: ({ data }) => {
        console.log(data);
        return {
          url: "/task",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetToDosQuery, useAddToDoMutation } = todoApi;
