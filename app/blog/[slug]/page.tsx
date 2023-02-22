import styles from './blogPost.module.css';
import '../../globals.css';
import {HiArrowLeft} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import {GoCalendar, GoEye} from "react-icons/go";

export default function BlogPostPage({params}: {
    params: { slug: string };
}) {
    return (
        <section className={styles.postSection}>
            <div className={styles.postTitle}>
                <Link href="/blog">
                    <HiArrowLeft className={`${styles.postBackIcon} arrowBtnSecondary`} size={55}/>
                </Link>
                <h1 className={`headingPrimary`}>Title1</h1>
            </div>

            <div className={styles.postContent}>
                <div className={styles.postDetails}>
                    <p className={`${styles.blogPostCategory} mr-3`}>Recording</p>
                    {/*  Date  */}
                    <div className={`${styles.blogPostDates} mr-3`}>
                        <GoCalendar className="mr-1" size={16}/>
                        <p className={styles.blogPostDate}>17/02/2023</p>
                    </div>
                    {/*  Views  */}
                    <div className={styles.blogPostViews}>
                        <GoEye className="mr-1" size={16}/>
                        <p className={styles.blogPostViewsNumber}>1000</p>
                    </div>
                </div>


                {/* TODO: create this as a component */}
                {/*  POST  */}
                <div className={styles.blogPost}>
                    <div className={styles.blogPostImageBox}>
                        <Image className={styles.blogPostImage} src="/blog/vibrant-neon-colorful-liquid 1.svg"
                               alt="forest" width={700} height={500}/>
                    </div>
                    <div className={styles.blogPostInformationBox}>
                        <div className={styles.blogPostTitleBox}>
                            <p className={styles.blogPostTitle}>How to produce High-Quality programming
                                Screencasts</p>
                        </div>
                    </div>
                </div>
                {/*  POST END */}

                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac justo interdum magna
                        vulputate facilisis non eu lorem. Vivamus nec felis non nibh porta tincidunt sit amet ac velit.
                        Nam at dictum felis. Donec et mollis leo. Suspendisse luctus magna nulla, vitae malesuada sapien
                        consequat condimentum. Phasellus eget tempor lectus. Nullam egestas dapibus elit nec accumsan.
                        Nulla ultricies eros lectus, venenatis egestas augue iaculis ut.

                        Morbi id nisl dui. Etiam tincidunt elit leo, ut rhoncus mi sodales a. Etiam quis magna enim.
                        Nullam imperdiet neque nec leo aliquam ornare. Phasellus non consequat ante. Phasellus sed felis
                        feugiat, posuere felis a, congue nunc. Maecenas porttitor nisl sit amet ipsum ullamcorper,
                        placerat sodales erat finibus. Vestibulum dignissim semper eros eu mattis. Etiam luctus dictum
                        massa, quis commodo leo faucibus ac.

                        Duis eu dui nec augue lobortis blandit vel sit amet magna. Phasellus fermentum, nibh quis
                        ullamcorper sollicitudin, magna ante sollicitudin metus, sit amet ultricies quam dui vel ipsum.
                        Fusce in tincidunt massa. Duis dapibus ipsum orci, sit amet lobortis ante cursus in. Morbi
                        blandit sem lacinia magna tristique pharetra. Sed placerat hendrerit neque congue maximus. Nam
                        fermentum leo sed nunc maximus posuere. Donec facilisis metus enim, eget molestie orci
                        scelerisque eget. Maecenas luctus feugiat mi, sit amet blandit dolor bibendum eget. Fusce rutrum
                        dignissim fringilla. Aenean feugiat libero sit amet sem bibendum laoreet. Phasellus ut leo leo.
                        Mauris dignissim purus quis velit posuere sodales. Aenean rhoncus nisi at lectus porta, eget
                        sodales diam feugiat. Curabitur suscipit ligula ut dolor posuere, sit amet ultricies lorem
                        ornare.
                    </p>
                </div>
            </div>

        </section>
    );
}