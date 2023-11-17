import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ArtistsPage from './routes/ArtistsPage.jsx';
import HomePage from './routes/HomePage.jsx';
import AlbumsPage from './routes/AlbumsPage.jsx';
import SongsPage from './routes/SongsPage.jsx';
import PlaylistsPage from './routes/PlaylistsPage.jsx';
import { GlobalSettingsProvider } from './providers/globalSettings.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/',
      element: <HomePage />},
      {path: '/artists',
      element: <ArtistsPage />},
      {path: '/albums',
      element: <AlbumsPage />},
      {path: '/songs',
      element: <SongsPage />},
      {path: '/playlists',
      element: <PlaylistsPage />},

    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalSettingsProvider>
    <RouterProvider router={router} />
  </GlobalSettingsProvider>,
)
