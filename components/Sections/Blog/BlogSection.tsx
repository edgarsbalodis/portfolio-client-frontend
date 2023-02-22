import BlogCategory from "@/components/Blog/Category/BlogCategory";
import BlogPosts from "@/components/Blog/Posts/BlogPosts";
import styles from "./blogSection.module.css";
import '../../../app/globals.css'

export default function BlogSection() {
    return (
        <section className={styles.blogSection}>
            <h1 className={`${styles.blogText} headingPrimary`}>Blog</h1>

            <div className={styles.blogTop}>
                <BlogCategory/>
                <BlogPosts/>
            </div>
        </section>
    );
}