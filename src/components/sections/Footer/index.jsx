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
                    </section>
                    <section className={styles.right}>
                        <div className={styles.map}>
                            <iframe 
                            title='google maps location' 
                            width="100%" height="100%" 
                            frameBorder="0" 
                            scrolling="no" 
                            marginHeight="0" 
                            marginWidth="0" 
                            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=es&amp;q=-34.3777827,-55.2380927&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            loading='lazy'
                        ></iframe>
                        </div>
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
            </section>
        </>
    )
}

export default Footer