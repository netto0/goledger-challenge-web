import React, { useState } from "react";
import styles from "./Loading.module.css";
import loadingGIF from "../assets/img/orange-loader.gif";

export default function Loading() {
  return (
    <div
      className={styles.loadingContainer}
      style={{ backgroundImage: `url(${loadingGIF})` }}
    />
  );
}
