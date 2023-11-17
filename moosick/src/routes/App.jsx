import styles from "./App.module.css";

import Header from "../components/Header";
import AlbumsPage from "./AlbumsPage";
import ArtistsPage from "./ArtistsPage";
import PlaylistsPage from "./PlaylistsPage";
import SongsPage from "./SongsPage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
