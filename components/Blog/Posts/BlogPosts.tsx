'use client';
import React from "react";
import styles from "./blogPosts.module.css";
import {blogsData} from "@/datas/blogs";
import BlogPostItem, {Position} from "@/components/Blog/Posts/PostItem/BlogPostItem";

interface BlogPostsProps {
    category: string;
}

const fetchBlogs = async (category: string) => {
    try {
        // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${category}`);
        // const data = await response.json();
        return blogsData;
    } catch (e) {
        throw new Error('Error while fetching data');
    }
}

const BlogPosts = ({category}: BlogPostsProps) => {
    // const blogs = await fetchBlogs(category);
    // create intersection observer for even blog posts to add animation on scroll to move from left to right
    // const postRef = useRef<HTMLDivElement | null>(null);

    // TODO: fix this animation on scroll
    // useEffect(() => {
    //     let initialLength = 0;
    //     const posts = document.querySelector(`.${styles.postsBlock} > *:nth-child(even)`);
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 console.log('entry', entry.target);
    //                 (entry.target as HTMLElement).style.transition = 'transform 1.5s ease-in-out';
    //                 (entry.target as HTMLElement).style.transform = `translateX(${initialLength}px)`;
    //                 initialLength += 30;
    //             }
    //         });
    //     }, {
    //         threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    //         rootMargin: "100px"
    //     });
    //
    //     observer.observe(posts as Element);
    //     return () => observer.disconnect();
    // });

    return (
        <div className={styles.postsBlock}>
            {blogsData.map(({title, slug, date, viewCount, category, image}, idx) => (
                <BlogPostItem title={title} slug={slug} image={image} category={category} date={date}
                              viewCount={viewCount} key={idx} position={idx % 2 === 0 ? Position.LEFT : Position.RIGHT}/>
            ))}
        </div>
    );
}

export default BlogPosts;