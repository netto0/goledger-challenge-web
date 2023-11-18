// import React, { useEffect, useState } from "react";
// import { getArtistsService, getArtistName } from "../api/services/artistServices";
// import { getAlbums } from "../api/services/albumServices";
// import { getAllSongs } from "../api/services/songServices";
// import { getAllPlaylists } from "../api/services/playlistServices";

// export const GlobalSettingsContext = React.createContext({});

// export const GlobalSettingsProvider = (props) => {
//   const [artists, setArtists] = useState([]);
//   const [albums, setAlbums] = useState([]);
//   const [songs, setSongs] = useState([]);
//   const [playlists, setPlaylists] = useState([]);

//   const giveAllAlbums = async () => {
//     const artistsList = await getArtistsService();
//     const albumsList = await getAlbums();

//     const albumsWithArtist = [];
//     albumsList.forEach((album) => {
//       artistsList.map((artist) => {
//         if (artist.key == album.artistKey) {
//           const albumObj = {
//             title: album.title,
//             artist: artist.name,
//             release: album.release,
//             rating: album.rating,
//           };

//           albumsWithArtist.push(albumObj);
//         }
//       });
//     });
//     setAlbums(albumsWithArtist);
//     setArtists(artistsList);
//   };

//   const giveAllSongs = async () => {
//     const artistsList = await getArtistsService();
//     const songsList = await getAllSongs();
//     const albumsList = await getAlbums();
//     const songsWithArtists = [];

//     songsList.forEach((song) => {
//       albumsList.map(
//         (album) => {
//           if (album.key == song.albumKey) {
//             const songObj = {
//               title: song.title,
//               key: song.key,
//               artists: song.artists,
//               album: album.title,
//               explicit: song.explicit,
//             };

//             songsWithArtists.push(songObj);
//           }
//         },
//         song.artists.map((songArtist) => {
//           artistsList.map((artist) => {
//             const artistNames = [];
//             if (artist.key == songArtist["@key"]) {
//               artistNames.push(artist.name);
//             }
//           });
//         }),
//         console.log(artistNames)
//       );
//     });
//     setSongs(songsWithArtists);
//   };

//   const giveAllPlaylists = async () => {
//     const playlistsArray = await getAllPlaylists();
//     setPlaylists(playlistsArray);
//   };

//   useEffect(() => {
//     giveAllAlbums();
//     giveAllSongs();
//     giveAllPlaylists();
//   }, []);

//   return (
//     <GlobalSettingsContext.Provider
//       value={{
//         artists,
//         albums,
//         songs,
//         playlists,
//       }}
//     >
//       {props.children}
//     </GlobalSettingsContext.Provider>
//   );
// };
