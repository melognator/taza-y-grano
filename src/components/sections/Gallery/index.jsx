import styles from './component.module.css'
import images from './images';
import texts from './texts';

const Gallery = () => {
    return (
        <>
            <a className='anchor' id='gallery' href='#'></a>
            <section>
                <div className={`content center`}>
                    <h2 className='title-margin'>{texts.title}</h2>
                    <div className={styles.gallery}>
                        <div className={`${styles.row} ${styles.row1}`}>
                            <img data-aos="fade-right" data-aos-delay={150*0} loading="lazy" src={images[0].src} alt={images[0].alt} />
                            <img data-aos="fade-left" data-aos-delay={150*1} loading="lazy" src={images[1].src} alt={images[1].alt} />
                        </div>
                        <div className={`${styles.row} ${styles.row2}`}>
                            <img data-aos="fade-up" data-aos-delay={150*0} loading="lazy" src={images[2].src} alt={images[2].alt} />
                            <img data-aos="fade-up" data-aos-delay={150*1} loading="lazy" src={images[3].src} alt={images[3].alt} />
                            <img data-aos="fade-up" data-aos-delay={150*2} loading="lazy" src={images[4].src} alt={images[4].alt} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery