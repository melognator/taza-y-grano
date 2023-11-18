import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColoredLink from '../../common/Button/ColoredLink';
import styles from './component.module.css'
import texts from './texts';
import socials from './socials';

const Footer = () => {
    return (
        <>
            <a className='anchor' id='footer' href='#'></a>
            <section className={`colored-section ${styles.container}`}>
                
                <div className={`content ${styles.content}`}>
                    <section className={styles.left}>
                        <h2>{texts.title}</h2>
                        <p>{texts.description}</p>
                        <ColoredLink href='https://www.google.com'>{texts.button}</ColoredLink>
                    </section>
                    <section className={styles.right}>
                        <div className={styles.socials}>
                            {socials.map((social, index) => (
                                <span key={index} data-aos="fade-down" data-aos-duration={500} data-aos-delay={100*index}>
                                <a key={index} target='_blank' href={social.link} aria-label={social.title}>
                                    <FontAwesomeIcon icon={social.icon} />
                                </a>
                                </span>
                            ))}
                        </div>
                        <p>{texts.copy}</p>
                    </section>
                </div>
                <div className={styles.footer}>
                    <p>{texts.createdWith} <a target='_blank' href='https://www.npmjs.com/package/smallbang'>smallbang</a></p>
                    <a href='#top'>Back to top</a>
                </div>
            </section>
        </>
    )
}

export default Footer