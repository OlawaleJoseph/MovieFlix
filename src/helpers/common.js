export const generateRandowmNumber = num => Math.floor(Math.random() * num);

export const filterMovies = (data, param) => {
  console.log(param, 'Before filter');
  const genreId = parseInt(param, 10);
  if (genreId === 0) return data;
  return data.filter(({ genreIds }) => genreIds.includes(genreId));
};
