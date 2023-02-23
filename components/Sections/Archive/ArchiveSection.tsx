import styles from './archiveSection.module.css';
import Archive from "@/components/Archive/Archive";
import HeadingText from "@/components/Heading/HeadingText";

export default function ArchiveSection() {
    return (
        <section className={styles.archiveSection}>
            <HeadingText
                variant={"h1"}
                styleVariant={"headingPrimary"}
                className={styles.archiveText}
            >
                See the<br/>archives
            </HeadingText>
            <Archive/>
        </section>
    );
}