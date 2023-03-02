import styles from './archiveSection.module.css';
import Archive from "@/components/Archive/Archive";
import HeadingText from "@/components/Heading/HeadingText";

const ArchiveSection = (): JSX.Element => {
    return (
        <section className={styles.archiveSection} id="work">
            <HeadingText
                variant={"h1"}
                styleVariant={"headingPrimary"}
                className={styles.archiveText}
            >
                See the<br/>archives
            </HeadingText>
            {/*@ts-expect-error Server Component*/}
            <Archive/>
        </section>
    );
}
export default ArchiveSection;