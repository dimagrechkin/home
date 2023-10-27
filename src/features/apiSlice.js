import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  createSinglePageEndpoint,
  createPaginationAndSortingEndpoint,
  createMutation,
  BASE_URL,
  CONTACT,
  SKILLS,
  EXPERIENCE,
  EDUCATION,
  PRIVATE,
  STARSHIPS,
  CONTACTS,
  POST,
} from '../helpers'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getFilmById: createSinglePageEndpoint(builder, CONTACT),
    getFilmsWithPaginationAndSorting: createPaginationAndSortingEndpoint(builder, CONTACT),
    getCharacterById: createSinglePageEndpoint(builder, SKILLS),
    getCharactersWithPagination: createPaginationAndSortingEndpoint(builder, SKILLS),
    getPlanetById: createSinglePageEndpoint(builder, EXPERIENCE),
    getPlanetsWithPagination: createPaginationAndSortingEndpoint(builder, EXPERIENCE),
    getSpeciesById: createSinglePageEndpoint(builder, EDUCATION),
    getSpeciesWithPagination: createPaginationAndSortingEndpoint(builder, EDUCATION),
    getVehicleById: createSinglePageEndpoint(builder, PRIVATE),
    getVehiclesWithPaginationAndSorting: createPaginationAndSortingEndpoint(builder, PRIVATE),
    getStarshipById: createSinglePageEndpoint(builder, STARSHIPS),
    getStarshipsWithPaginationAndSorting: createPaginationAndSortingEndpoint(builder, STARSHIPS),
    postContact: createMutation(builder, CONTACTS, POST),
  }),
})

export const {
  useGetFilmByIdQuery,
  useGetFilmsWithPaginationAndSortingQuery,
  useGetCharacterByIdQuery,
  useGetCharactersWithPaginationQuery,
  useGetPlanetByIdQuery,
  useGetPlanetsWithPaginationQuery,
  useGetSpeciesByIdQuery,
  useGetSpeciesWithPaginationQuery,
  useGetVehicleByIdQuery,
  useGetVehiclesWithPaginationAndSortingQuery,
  useGetStarshipByIdQuery,
  useGetStarshipsWithPaginationAndSortingQuery,
  usePostContactMutation,
} = apiSlice
