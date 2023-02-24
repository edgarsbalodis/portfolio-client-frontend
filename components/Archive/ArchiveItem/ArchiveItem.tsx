import styles from "@/components/Archive/archive.module.css";
import Image from "next/image";
import {HiArrowRight} from "react-icons/hi";
import { ArchiveInterface } from "@/components/Archive/Archive";

interface Props {
    archive: ArchiveInterface;
}
export default function ArchiveItem({archive}: Props ) {
    return (
        <>
            <div className={styles.archive}>
                <div className={styles.archiveImageBox}>
                    <Image className={styles.archiveImage} src={archive.image} alt="forest" width={405}
                           height={520}/>
                </div>
                <div className={styles.archiveTitleBox}>
                    <p className={styles.archiveTitle}>{archive.title}</p>
                    <HiArrowRight className="arrow" size={30}/>
                </div>
            </div>
        </>
    );
}