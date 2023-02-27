import React from "react";
import styles from "./blogPostItem.module.css";
import Image from "next/image";
import {GoCalendar, GoEye} from "react-icons/go";
import Link from "next/link";
import classNames from "classnames";

export enum Position {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center"
}
interface BlogPostItemProps {
    title: string;
    // TODO: check for image metadata ex: alt
    image: string;
    slug?: string;
    category?: string;
    date?: string;
    viewCount?: number;
    position?: Position;
}

const BlogPostItem: React.FC<BlogPostItemProps> = (
    {
        title,
        slug,
        date,
        viewCount,
        category,
        image,
        position
    }
) => {
    return (
        <div className={styles.postBlock}>
            <div className={styles.imageBlock}>
                <Image className={styles.imageBlock__image} src={image}
                       alt={title} width={700} height={500}/>
            </div>
            <div className={classNames(styles.postInformationBlock, {
                [styles.informationBlockRight]: position === Position.RIGHT,
                [styles.informationBlockLeft]: position === Position.LEFT,
                [styles.informationBlockCenter]: position === Position.CENTER
            })}>
                <div className={styles.titleBlock}>
                    <Link href={`blog/${slug}`} className={styles.titleBlock__title}>{title}</Link>
                </div>
                <div className={styles.informationBlock}>
                    {category !== undefined &&
                        <p className={styles.informationBlock__category}>{category}</p>
                    }
                    {date !== undefined &&
                        <div className={styles.dateBlock}>
                            <GoCalendar className="mr-1" size={16}/>
                            <p className={styles.dateBlock__date}>{date}</p>
                        </div>
                    }
                    {viewCount !== undefined &&
                        <div className={styles.viewBlock}>
                            <GoEye className="mr-1" size={16}/>
                            <p className={styles.viewBlock__count}>{viewCount}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPostItem;