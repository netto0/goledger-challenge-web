import styles from "./App.module.css";
import React from "react";
import { GlobalSettingsContext } from "../providers/globalSettings";
import { ToastContainer } from "react-toastify";

import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const { activeModal, closeModal } = React.useContext(
    GlobalSettingsContext
  );

  return (
    <div className={styles.mainContainer}>
      <ToastContainer />
      {activeModal && <div className={styles.modalBgBlur} onClick={closeModal} />}
      {activeModal}
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
