'use client';
import {useRef, useEffect} from 'react';
import styles from '../hero.module.css';
import Image from "next/image";

export default function ArtBlock() {
    // TODO: think about refactoring this component
    // - maybe it's better to use IntersectionObserver
    const sectionRef = useRef<HTMLDivElement | null>(null);

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
                <h1 className={styles.descriptionBlock__text}>
                    Build and develop<br/>
                    projects from concept<br/>
                    until the publish
                </h1>
                <div className={styles.artBlock}>
                    <div className={styles.artBlock__circle}/>
                    <Image className={styles.artBlock__image} id="image"
                           src="https://res.cloudinary.com/driicwfjb/image/upload/v1677493798/removal.ai__24756905-d207-45a5-857a-54885b45b626_rrrlgw.png"
                           width={700} height={700}
                           alt="flower"/>
                </div>
            </div>
        </div>
    );
}