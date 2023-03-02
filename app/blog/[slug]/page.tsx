import styles from './blogPost.module.css';
import {HiArrowLeft} from "react-icons/hi";
import Link from "next/link";
import {GoCalendar, GoEye} from "react-icons/go";
import BlogPostItem, {Position} from "@/components/Blog/Posts/PostItem/BlogPostItem";
import {blogsData} from "@/datas/blogs";
import Contacts from "@/components/Contacts/Contacts";

interface PostDataInterface {
    title: string;
    slug: string;
    image: string;
    category: string;
    date: string;
    viewCount: number;
}

const postData = async (slug: string): Promise<PostDataInterface> => {
    // TODO: refactor if in request is error return error page
    const data = blogsData.find((post) => post.slug === slug);
    if (!data) {
        return {
            title: '',
            slug: '',
            image: '',
            category: '',
            date: '',
            viewCount: 0,
        };
    }
    // in future there will be a request to the server to get the post data
    // const res = await fetch(`https://.../${slug}`);
    // return post data
    return data;
}

interface BlogPostPageProps {
    params: {
        slug: string;
    }
}

const BlogPostPage = async ({params}: BlogPostPageProps): Promise<JSX.Element> => {
    const {title, slug, viewCount, category, image, date} = await postData(params.slug);

    return (
        <section className={styles.postSection}>
            <div className={styles.postTitle}>
                <Link href="/blog">
                    <HiArrowLeft className={`${styles.postBackIcon} arrowBtnSecondary`} size={55}/>
                </Link>
                <h1 className={styles.postTitle__title}>{title}</h1>
            </div>

            <div className={styles.postContent}>
                <div className={styles.postDetails}>
                    <p className={`${styles.blogPostCategory} mr-3`}>{category}</p>
                    {/*  Date  */}
                    <div className={`${styles.blogPostDates} mr-3`}>
                        <GoCalendar className="mr-1" size={16}/>
                        <p className={styles.blogPostDate}>{date}</p>
                    </div>
                    {/*  Views  */}
                    <div className={styles.blogPostViews}>
                        <GoEye className="mr-1" size={16}/>
                        <p className={styles.blogPostViewsNumber}>{viewCount}</p>
                    </div>
                </div>

                {/* TODO: create this as a component */}
                <div className={styles.blogPost}>
                    <BlogPostItem title={title} slug={slug} image={image} position={Position.CENTER}/>
                </div>

                {/* TODO: provide html with blog content */}
                {/* TODO: style everything under this div based on provided html and it's structure */}
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
            <Contacts/>
        </section>
    );
}
export default BlogPostPage;