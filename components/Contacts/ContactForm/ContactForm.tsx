import styles from './contactForm.module.css';

const ContactForm = () => {
    return (
        <div className={styles.contactForm}>
            <form id='contact-form' className={styles.contactForm__form} action="" method="POST">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                    className={styles.contactForm__input}
                />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    className={styles.contactForm__input}
                />
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    className={styles.contactForm__input}
                />
                <textarea
                    name="message"
                    id="message"
                    cols={10}
                    rows={5}
                    placeholder="Message"
                    required
                    className={styles.contactForm__input}
                />
                <button className={styles.contactForm__button} form="contact-form" type="submit">Send Message</button>
            </form>
            {/* TODO:
                - insert captcha or other verification
                - like that cloudflare - i'm human
            */}
        </div>
    );
}

export default ContactForm;