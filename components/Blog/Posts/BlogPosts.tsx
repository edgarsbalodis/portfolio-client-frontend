import styles from "./blogPosts.module.css";
import Image from "next/image";
import {GoCalendar, GoEye} from "react-icons/go";

export default function BlogPosts() {
    return (
        <div className={styles.blogPosts}>
            {/* loop for each blogPost */}
            {/* probably will need pagination */}

            {/* Post 1 */}
            <div className={styles.blogPost}>
                <div className={styles.blogPostImageBox}>
                    <Image className={styles.blogPostImage} src="blog/vibrant-neon-colorful-liquid 1.svg"
                           alt="forest" width={700} height={500}/>
                </div>
                <div className={styles.blogPostInformationBox}>
                    <div className={styles.blogPostTitleBox}>
                        <p className={styles.blogPostTitle}>How to produce High-Quality programming
                            Screencasts</p>
                    </div>
                    <div className={styles.blogPostInformation}>
                        <p className={styles.blogPostCategory}>Recording</p>
                        <div className={styles.blogPostDates}>
                            <GoCalendar className="mr-1" size={16}/>
                            <p className={styles.blogPostDate}>17/02/2023</p>
                        </div>
                        <div className={styles.blogPostViews}>
                            <GoEye className="mr-1" size={16}/>
                            <p className={styles.blogPostViewsNumber}>1000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Post 1 ENDS --- */}

            {/* Post 2 */}
            <div className={styles.blogPost}>
                <div className={styles.blogPostImageBox}>
                    <Image className={styles.blogPostImage}
                           src="blog/transparent-colorful-oil-drops-closeup-abstract-background-neural-network-generated-art 1.svg"
                           alt="art" width={700} height={500}/>
                </div>
                <div className={styles.blogPostInformationBox}>
                    <div className={styles.blogPostTitleBox}>
                        <p className={styles.blogPostTitle}>How to produce High-Quality programming
                            Screencasts</p>
                    </div>
                    <div className={styles.blogPostInformation}>
                        <p className={styles.blogPostCategory}>Coding</p>
                        <div className={styles.blogPostDates}>
                            <GoCalendar className="mr-1" size={16}/>
                            <p className={styles.blogPostDate}>17/02/2023</p>
                        </div>
                        <div className={styles.blogPostViews}>
                            <GoEye className="mr-1" size={16}/>
                            <p className={styles.blogPostViewsNumber}>10 000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Post 2 ENDS --- */}

            {/* Post 3 */}
            <div className={styles.blogPost}>
                <div className={styles.blogPostImageBox}>
                    <Image className={styles.blogPostImage}
                           src="blog/closeup-greyscale-shot-building-with-curvy-twists-berlin-germany 1.svg"
                           alt="forest" width={700} height={500}/>
                </div>
                <div className={styles.blogPostInformationBox}>
                    <div className={styles.blogPostTitleBox}>
                        <p className={styles.blogPostTitle}>How to produce High-Quality programming
                            Screencasts</p>
                    </div>
                    <div className={styles.blogPostInformation}>
                        <p className={styles.blogPostCategory}>Productivity</p>
                        <div className={styles.blogPostDates}>
                            <GoCalendar className="mr-1" size={16}/>
                            <p className={styles.blogPostDate}>17/02/2023</p>
                        </div>
                        <div className={styles.blogPostViews}>
                            <GoEye className="mr-1" size={16}/>
                            <p className={styles.blogPostViewsNumber}>2000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Post 3 ENDS --- */}
        </div>
    );
}