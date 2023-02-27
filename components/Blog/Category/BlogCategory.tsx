import styles from "./blogCategory.module.css";
import {HiArrowRight} from "react-icons/hi";
// import '../../../app/globals.css'
import React from "react";
import {blogsCategoryData} from "@/datas/blogs";

interface BlogCategoryProps {
    title: string;
}

const fetchBlogsCategory = async (): Promise<BlogCategoryProps[]>  => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
        return blogsCategoryData;
    } catch (e) {
        throw new Error('Error while fetching data');
    }
}
// TODO:
// 1. Add onClick event to each category
    // 1.1. onClick event should trigger fetch the blogs and pass category as a parameter

const BlogCategory = async (): Promise<JSX.Element> => {
    const categories = await fetchBlogsCategory();

    return (
        <div className={styles.categoryBlock}>
            <ul className={styles.categoryBlock__list}>
                {categories.map(({title}, idx) => (
                    <li className={styles.categoryBlock__item} key={idx}>
                        {title}
                        <HiArrowRight className="arrowBtnPrimary" size={30}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default BlogCategory;