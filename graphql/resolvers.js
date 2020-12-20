import { getMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit }) => getMovie(limit),
  },
};
export default resolvers;
