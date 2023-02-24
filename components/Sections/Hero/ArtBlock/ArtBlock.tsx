'use client';
import { useRef, useEffect } from 'react';
import styles from '../hero.module.css';
import Image from "next/image";

export default function ArtBlock() {
    // TODO: think about refactoring this component
    // - maybe it's better to use IntersectionObserver
    const sectionRef = useRef<HTMLDivElement>(null);

    const initialWidth = 700; // Set the initial width of the image here
    const maxWidth = 1250; // Set the maximum width of the image here

    useEffect(() => {
        function handleScroll() {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isInViewport) {
                const scrollPosition = window.scrollY;
                const newWidth = initialWidth + scrollPosition * 0.17; // Change the factor to adjust the scaling rate
                const limitedWidth = Math.min(newWidth, maxWidth); // Limit the new width to the maximum width
                const image = section.querySelector('#image') as HTMLImageElement;
                image.style.width = `${limitedWidth}px`;
                image.style.height = `${limitedWidth}px`;
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [initialWidth, maxWidth]);

    return (
        <div ref={sectionRef}>
            <div className={styles.descriptionBlock}>
                {
                    /*
                     TODO: create custom headingPrimary class
                     - just need to update component to pass css variables if it possible
                     - or just create custom class
                     - because light and dark modes will have the same white color
                     - so it won't be headingPrimary anymore
                    */
                }
                <h1 className={`${styles.descriptionBlock__text} headingPrimary`}>Build and develop<br/>
                    projects from concept<br/>
                    until the publish
                </h1>
                {/*<div className={styles.artBlock}>*/}
                {/*    <div className={styles.artBlock__circle}/>*/}
                {/*    <Image className={styles.artBlock__image} src="/black_flower.svg" width={1250} height={1250}*/}
                {/*           alt="flower"/>*/}
                {/*</div>*/}
                <div className={styles.artBlock}>
                    <div className={styles.artBlock__circle}/>
                    <Image className={styles.artBlock__image} id="image" src="/black_flower.svg" width={700} height={700}
                           alt="flower"/>
                </div>
            </div>
        </div>
    );
}