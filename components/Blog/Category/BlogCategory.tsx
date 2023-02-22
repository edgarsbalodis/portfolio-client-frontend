import styles from "./blogCategory.module.css";
import {HiArrowRight} from "react-icons/hi";
import {blogsData} from "@/datas/blogs";
import '../../../app/globals.css'

export default function BlogCategory() {
    return (
        <div className={styles.categories}>
            <ul className={styles.categoryList}>
                {
                    blogsData.map(({title}, idx)=>(
                        <li className={styles.category} key={idx}>
                            {title}
                            <HiArrowRight className="arrowBtnPrimary" size={30}/>
                        </li>
                    ))
                }
                {/* loop for each category */}
                {/*<li className={styles.category}>*/}
                {/*    Coding*/}
                {/*    <HiArrowRight className="arrowBtnPrimary" size={30}/>*/}
                {/*</li>*/}
                {/*<li className={styles.category}>*/}
                {/*    Productivity*/}
                {/*    <HiArrowRight className="arrowBtnPrimary" size={30}/>*/}
                {/*</li>*/}
                {/*<li className={styles.category}>*/}
                {/*    System Design*/}
                {/*    <HiArrowRight className="arrowBtnPrimary" size={30}/>*/}
                {/*</li>*/}
                {/*<li className={styles.category}>*/}
                {/*    Web Development*/}
                {/*    <HiArrowRight className="arrowBtnPrimary" size={30}/>*/}
                {/*</li>*/}
                {/*<li className={styles.category}>*/}
                {/*    Health*/}
                {/*    <HiArrowRight className="arrowBtnPrimary" size={30}/>*/}
                {/*</li>*/}
                {/*<li className={styles.category}>*/}
                {/*    Money*/}
                {/*    <HiArrowRight className="arrowBtnPrimary" size={30}/>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}