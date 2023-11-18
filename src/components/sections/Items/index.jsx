import styles from './component.module.css'
import items from './items';
import texts from './texts';

const Items = () => {
    return (
        <>
            <a className='anchor' id='menu' href='#'></a>
            <section>
                <div className={`content`}>
                    <h2 className='title-margin center'>{texts.title}</h2>
                    <div className={styles.items}>
                        {items.map((item, index) => (
                            <article
                            data-aos="fade-up" 
                            data-aos-delay={100*(index % 4)}
                             key={index}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt={item.alt} />
                                    <p>$ {item.price}</p>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Items