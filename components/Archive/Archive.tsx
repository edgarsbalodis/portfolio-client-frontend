import styles from "./archive.module.css"
import Image from "next/image";
import '../../app/globals.css'
import {HiArrowRight} from "react-icons/hi";

export default function Archive() {
    return (
        <section>
            <div className={styles.archives}>
                {/* There will be for loop for each Project */}
                {/* Project 1 */}
                {/* TODO: split to component -> ArchiveItem */}
                <div className={styles.archive}>
                    <div className={styles.archiveImageBox}>
                        <Image className={styles.archiveImage} src="archive/forest_project.svg" alt="forest" width={405}
                               height={520}/>
                    </div>
                    <div className={styles.archiveTitleBox}>
                        <p className={styles.archiveTitle}>Forest</p>
                        <HiArrowRight className="arrow" size={30}/>
                    </div>
                </div>

                {/* Project 2 */}
                <div className={styles.archive}>
                    <div className={styles.archiveImageBox}>
                        <Image className={styles.archiveImage} src="archive/dark_bear_house_project.svg" alt="forest"
                               width={405} height={520}/>
                    </div>
                    <div className={styles.archiveTitleBox}>
                        <p className={styles.archiveTitle}>
                            Dark Bear House
                        </p>
                        <HiArrowRight className="arrow" size={30}/>
                    </div>
                </div>

                {/* Project 3 */}
                <div className={styles.archive}>
                    <div className={styles.archiveImageBox}>
                        <Image className={styles.archiveImage} src="archive/zebra_project.svg" alt="forest" width={405}
                               height={520}/>
                    </div>
                    <div className={styles.archiveTitleBox}>
                        <p className={styles.archiveTitle}>
                            Zebra Project
                        </p>
                        <HiArrowRight className="arrow" size={30}/>
                    </div>
                </div>
            </div>
        </section>
    );
}