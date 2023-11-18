import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { contact } from '../../../utils/links';

const socials = [
    {
        icon: faFacebook,
        link: 'https://facebook.com',
        title: 'Facebook',
    },
    {
        icon: faInstagram,
        link: 'https://instagram.com',
        title: 'Instagram',
    },
    {
        icon: faWhatsapp,
        link: contact,
        title: 'Our Email',
    },  
];

export default socials;