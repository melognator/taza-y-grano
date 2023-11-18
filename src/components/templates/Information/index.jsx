import ColoredLink from '../../common/Button/ColoredLink';
import Link from '../../common/Button/Link';
import styles from './component.module.css'
import texts from './texts';

const Information = () => {
    const colored = true
    return (
        <>
            <a className='anchor' id='information' href='#'></a>
            <section className={colored ? 'colored-section' : ''}>
                <div className={`content center ${styles.content}`}>
                    <h2>{texts.title}</h2>
                    <p data-aos="zoom-in" data-aos-duration={500}>{texts.description}</p>
                    <span data-aos="zoom-in" data-aos-duration={500} data-aos-delay={150}>
                        {colored ? (
                            <ColoredLink href='https://www.google.com'>{texts.button}</ColoredLink>
                        ) : (
                            <Link href='https://www.google.com'>{texts.button}</Link>
                        )}
                    </span>
                </div>
            </section>
        </>
    )
}

export default Information