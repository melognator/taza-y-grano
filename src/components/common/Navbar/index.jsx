import Link from '../Button/Link';
import Menu from '../Menu';
import styles from './component.module.css'
import links from './links';
import texts from './texts';

const Navbar = () => {
    return (
        <section id='navbar' className={styles.container}>
            <div className='content'>
                <a href="/" className={styles.brand}>
                <svg width="75" height="75" viewBox="0 0 350 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M276.07 191.521C263.07 184.021 256.695 171.021 260.07 156.021C264.908 134.521 291.07 130.52 308.57 142.02C336.07 162.521 320.71 205.052 299.07 215.52C271.44 228.888 251.57 205.521 251.57 205.521C237.64 242.989 220 273.709 203.57 280.521C165.5 293.5 108.93 284.913 90.5702 276.052C63.5702 263.02 22.5 189.5 25.9999 104.552C26.8055 84.9971 69.0702 62.2222 144.07 63.0204C219.07 63.8186 265.831 83.5203 267.57 99.5203C270.07 122.52 223.07 136.059 194.5 139C154 143.169 126.5 139.469 98.4999 133.5C86.4999 130.942 62.0701 123.52 62.0701 109.52C62.0701 89.9891 109.554 85.5205 141 85.5205C168 85.5205 231.57 94.9763 212.07 107.02C195.07 117.52 149.57 119.02 117.57 109.52" stroke="#824826" strokeWidth="10" strokeLinecap="round"/>
                    <path d="M102.616 179.677C102.398 186.105 108.206 187.888 114.096 189.429C138.748 195.88 156.687 203.116 183.504 220.156L194.874 213.635C194.73 206.476 188.96 189.231 172.686 178.49C165.795 173.942 154.894 167.849 136.203 166.417C119.376 165.129 102.889 171.642 102.616 179.677Z" stroke="#824826" strokeWidth="8"/>
                    <path d="M181.984 240.761C182.792 231.754 153.001 218.886 142.19 214.122C131.38 209.357 122.299 206.08 112.798 203.076C88.1382 195.279 92.2585 211.956 92.2585 211.956L92.2832 212.072C92.9561 215.226 94.9774 224.699 108 235.826C115.351 242.106 132.215 250.916 150.809 252.719C167.548 254.342 181.267 248.754 181.984 240.761Z" stroke="#824826" strokeWidth="8"/>
                </svg>
                    <h1>{texts.brand}</h1>
                </a>
                <nav>
                    <div className={styles.links}>
                        {links.map((link, index) => (
                            <a key={index} className={styles.link} href={link.url}>{link.text}</a>
                        ))}
                        <Link className={styles.button} href="https://google.com">{'Contáctanos'}</Link>
                    </div>
                    <Menu className={styles.menu} links={links} footer={
                        <Link href="https://google.com">{'Contáctanos'}</Link>
                    } />
                </nav>
            </div>
        </section>
    )
}

export default Navbar;