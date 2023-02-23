import styles from "./blogCategory.module.css";
import {HiArrowRight} from "react-icons/hi";
import { blogsCategoryData } from "@/datas/blogs";
import '../../../app/globals.css'

export default function BlogCategory() {
    return (
        <div className={styles.categories}>
            <ul className={styles.categoryList}>
                {
                    blogsCategoryData.map(({title}, idx)=>(
                        <li className={styles.category} key={idx}>
                            {title}
                            <HiArrowRight className="arrowBtnPrimary" size={30}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}