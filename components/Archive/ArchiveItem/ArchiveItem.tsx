import React from "react";
import styles from "@/components/Archive/archive.module.css";
import Image from "next/image";
import {HiArrowRight} from "react-icons/hi";

interface ArchiveItemProps {
    title: string;
    slug: string;
    image: string;
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({title, slug, image}) => {
    return (
        <>
            <div className={styles.archiveBlock}>
                <div className={styles.imageBlock}>
                    <Image className={styles.imageBlock__image} src={image} alt="forest" width={405}
                           height={520}/>
                </div>
                <div className={styles.titleBlock}>
                    <p className={styles.titleBlock__title}>{title}</p>
                    <HiArrowRight className="arrow" size={30}/>
                </div>
            </div>
        </>
    );
}
export default ArchiveItem;