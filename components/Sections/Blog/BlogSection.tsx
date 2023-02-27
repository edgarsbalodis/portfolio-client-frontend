import BlogCategory from "@/components/Blog/Category/BlogCategory";
import BlogPosts from "@/components/Blog/Posts/BlogPosts";
import HeadingText from "@/components/Heading/HeadingText";
import styles from "./blogSection.module.css";
import '../../../app/globals.css'

const category = 'coding';

const BlogSection = async (): Promise<JSX.Element> => {
    return (
        <section className={styles.blogBlock}>
            <HeadingText
                variant="h1"
                styleVariant="headingPrimary"
                className={styles.blogBlock__text}
            >
                Blog
            </HeadingText>
            <div className={styles.blogBlock__section}>
                {/*@ts-expect-error Server Component*/}
                <BlogCategory/>
                <BlogPosts category={category}/>
            </div>
        </section>
    );
}
export default BlogSection;