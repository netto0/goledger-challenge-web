import React from "react";
import styles from "./ListTitle.module.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function ListTitle({ title, btnFunction }) {
  return (
    <div className={styles.listTitle}>
      <h1>{title}</h1>
      <button onClick={btnFunction}>
        <BsFillPlusCircleFill />
      </button>
    </div>
  );
}
