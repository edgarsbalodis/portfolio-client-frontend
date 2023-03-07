import styles from './contacts.module.css';
import ContactForm from "@/components/Contacts/ContactForm/ContactForm";
import {socials} from "@/datas/socials";
import SocialIcon from "@/components/SocialIcon/SocialIcon";

const Contacts = () => {
    return (
        <div className={styles.contactBlock}>
            <h1 className={styles.contactBlock__heading}>Interested in<br/>working together?</h1>
            {/* TRAINED CHAT-GPT COMPONENT GOES HERE */}

            {/* Contact form */}
            <ContactForm/>

            {/* Social-media block */}
            <div className={styles.socialMediaBlock}>
                <h1 className={styles.socialMediaBlock__title}>Follow me</h1>
                <ul className={styles.socialMediaBlock__list}>
                    {socials.map(({url, icon}, idx) => (
                        <li className={styles.socialMediaBlock__item} key={idx}>
                             <SocialIcon url={url} icon={icon} className={styles.socialMediaBlock__icon} size={30}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Contacts;