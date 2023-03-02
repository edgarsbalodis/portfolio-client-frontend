import styles from './contacts.module.css';
import ContactForm from "@/components/Contacts/ContactForm/ContactForm";
import {
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaMediumM
} from "react-icons/fa";
import {GoMarkGithub} from "react-icons/go";
import Link from "next/link";

const Contacts = () => {
    return (
        <div className={styles.contactBlock}>
            <h1 className={styles.contactBlock__heading}>Interested in <br/> working together?</h1>
            {/* TRAINED CHAT-GPT COMPONENT */}

            {/* Contact form */}
            <ContactForm/>
            <div className={styles.socialMediaBlock}>
                <h1 className={styles.socialMediaBlock__title}>Follow me</h1>
                <ul className={styles.socialMediaBlock__list}>
                    <li className={styles.socialMediaBlock__item}>
                        <Link href="">
                            <GoMarkGithub className={styles.socialMediaBlock__icon} size={30}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <FaTwitter className={styles.socialMediaBlock__icon} size={30}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <FaLinkedinIn className={styles.socialMediaBlock__icon} size={30}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <FaInstagram className={styles.socialMediaBlock__icon} size={30}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <FaMediumM className={styles.socialMediaBlock__icon} size={30}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;