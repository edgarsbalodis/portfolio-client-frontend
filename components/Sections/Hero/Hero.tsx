import styles from './hero.module.css';
import Image from "next/image";

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
                    <h1 className="headingPrimary">I love to create <br/>something<br/>simple and<br/>clear</h1>
                </div>
            </div>

            <div className={styles.abstractBlock}/>

            <div className={styles.descriptionBlock}>
                <h1 className={`${styles.descriptionBlock__text} headingPrimary`}>Build and develop<br/>
                    projects from concept<br/>
                    until the publish
                </h1>
                <div className={styles.artBlock}>
                    <div className={styles.artBlock__circle}/>
                    <Image className={styles.artBlock__image} src="/black_flower.svg" width={1250} height={1250}
                           alt="flower"/>
                </div>
            </div>

        </section>
    )
}