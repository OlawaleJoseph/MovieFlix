/* eslint-disable camelcase */
export const generateRandowmNumber = num => Math.floor(Math.random() * num);

export const filterMovies = (data, param) => (
  data.filter(({ genreIds }) => genreIds.includes(param))
);
