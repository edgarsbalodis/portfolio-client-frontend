import styles from "./archive.module.css"
import '../../app/globals.css'
import {archiveData} from "@/datas/archive";
import ArchiveItem from "@/components/Archive/ArchiveItem/ArchiveItem";
export interface ArchiveInterface {
    title: string;
    slug: string;
    image: string;
}

const fetchArchiveData = async () => {
    // const res = await fetch("url");
    // const arhives = await res.json();
    return archiveData;
}

export default async function Archive(): Promise<JSX.Element> {
    const archiveData = await fetchArchiveData();
    return (
        <section>
            <div className={styles.archives}>
                {
                    archiveData.map((archive: ArchiveInterface, idx) => (
                        <ArchiveItem key={idx} archive={archive}/>
                    ))
                }
            </div>
        </section>
    );
}