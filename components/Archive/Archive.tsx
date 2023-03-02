import styles from "./archive.module.css"
import '../../app/globals.css'
import {archiveData} from "@/datas/archive";
import ArchiveItem from "@/components/Archive/ArchiveItem/ArchiveItem";
import React from "react";

const fetchArchiveData = async () => {
    // const res = await fetch("url");
    // const arhives = await res.json();
    return archiveData;
}

const Archive = async (): Promise<JSX.Element> => {
    const archiveData = await fetchArchiveData();

    return (
        <>
            <div className={styles.archivesBlock}>
                {archiveData.map((archive, idx) => (
                    <ArchiveItem key={idx} title={archive.title} slug={archive.slug} image={archive.image}/>
                ))}
            </div>
        </>
    );
}

export default Archive;