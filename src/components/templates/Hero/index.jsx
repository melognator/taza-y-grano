import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={`content ${styles.content}`}>
                <h2 data-aos="fade-up" data-aos-delay={150*0}>{texts.title}</h2>
                <p data-aos="fade-up" data-aos-delay={150*1}>{texts.subtitle1}</p>
                <p data-aos="fade-up" data-aos-delay={150*2}>{texts.subtitle2}</p>
                <span data-aos="fade-up" data-aos-delay={150*3}>
                    <Link href='https://www.google.com' >{texts.button}</Link>
                </span>
            </div>
        </section>
    )
}

export default Hero