"use client";
import React from "react";
import { HiArrowUp } from "react-icons/hi";
import styles from "./scrollUpBtn.module.css";

const onClick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const ScrollUpBtn = () => {
    return (
        <div className={styles.scrollBtnBlock}>
            <HiArrowUp onClick={onClick} className={styles.scrollBtnBlock__icon} size={14} />
        </div>
    );
}

export default ScrollUpBtn;