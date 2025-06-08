export const movies = [
  { poster: '/poster/bad-monkey-1.jpg', name: 'Bad Monkey' },
  {
    poster: '/poster/presumed_innocent-1.jpg',
    name: 'presumed innocent',
  },
  {
    poster: '/poster/fly-me.jpg',
    name: 'fly me',
  },
  { poster: '/poster/silo.jpg', name: 'Silo' },
  {
    poster: '/poster/smoke.jpg',
    name: 'Smoke',
  },
  {
    poster: '/poster/planet.png',
    name: 'plant',
  },
  { poster: '/poster/jane.jpg', name: 'Jane' },
];
// export const movies = [
//   { poster: '/posters/airplane.webp', name: 'Airplane' },
//   {
//     poster: '/posters/family-man.webp',
//     name: 'Family man',
//   },
//   {
//     poster: '/posters/laboratory.webp',
//     name: 'Laboratory',
//   },
//   { poster: '/posters/napoleon.webp', name: 'Napoleon' },
//   {
//     poster: '/posters/person-in-darkness.webp',
//     name: 'Person in Darkness',
//   },
//   {
//     poster: '/posters/scary-building.webp',
//     name: 'Scary Building',
//   },
//   { poster: '/posters/stars.webp', name: 'Stars' },
// ];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
