import styles from './hero.module.css';
import Image from "next/image";
import HeadingText from "@/components/Heading/HeadingText";
import ArtBlock from "@/components/Sections/Hero/ArtBlock/ArtBlock";

export default function Hero() {
    return (
        <section className={styles.sectionHero}>
            <div className={styles.heroBlock}>
                <div className={styles.animationBlock}>
                    <Image className={styles.animationBlock__image} src="/bubbles.svg" width={645} height={804}
                           alt="bubbles"/>
                    <div className={styles.animationBlock__text}>
                        <Image src="/Rectangle.svg" width={350} height={250} alt="rectangle"/>
                    </div>
                </div>
                <div className={styles.ctaBlock}>
                    <button className="primaryButton">Contact</button>
                </div>
                <div className={styles.textBlock}>
                    <HeadingText
                        variant={'h1'}
                        styleVariant={'headingPrimary'}
                    >
                        I love to create <br/>something<br/>simple and<br/>clear
                    </HeadingText>
                </div>
            </div>
            <div className={styles.abstractBlock}/>
            <ArtBlock/>
        </section>
    )
}