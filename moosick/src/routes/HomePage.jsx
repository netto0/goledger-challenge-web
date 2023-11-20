import React from "react";
import styles from "./HomePage.module.css"
import Logo from "../components/Logo";

export default function HomePage() {
    return (
        <div className={styles.homePageContainer}>
            <h1>YOUR FAVORITE PLACE TO LISTEN TO <strong>MUSIC</strong></h1>
            <Logo />
        </div>
    )
}