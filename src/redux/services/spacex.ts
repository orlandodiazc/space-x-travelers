import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Company } from "../../types/company"
import type { Rocket } from "../../types/rocket"
import type { Mission } from "../../types/mission"

export const apiSlice = createApi({
  reducerPath: "spacex",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com" }),
  endpoints: (builder) => ({
    getCompany: builder.query<Company, void>({
      query: () => "/latest/company",
    }),
    getRockets: builder.query<Rocket[], void>({
      query: () => "/latest/rockets",
    }),
    getMissions: builder.query<Mission[], void>({
      query: () => "/v3/missions",
      transformResponse: (res: Mission[]) => res.slice(0, 4),
    }),
  }),
})

export const { useGetCompanyQuery, useGetMissionsQuery, useGetRocketsQuery } =
  apiSlice
