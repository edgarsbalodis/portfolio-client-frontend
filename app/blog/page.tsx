import '../globals.css';
import styles from './blogPage.module.css';
import BlogCategory from "@/components/Blog/Category/BlogCategory";
import BlogPosts from "@/components/Blog/Posts/BlogPosts";
export default function BlogPage() {
    return (
        <section className={styles.blogSection}>
            <div className={styles.blogText}>
                <h1 className={`headingPrimary`}>Blog</h1>
            </div>
            <BlogCategory />
            <BlogPosts />
        </section>
    );
}