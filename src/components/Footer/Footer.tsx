import * as React from 'react';
import './Footer.css';

// Define types for props
interface Link {
    name: string;
    value: string;
}

interface FooterProps {
    links: Link[];
    text: string; 
}

const navigateTo = (path: string) => {
    try {
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    } catch (error) {
        console.error('Navigation error:', error);
    }
};

const Footer: React.FC<FooterProps> = ({ links, text }) => {
    return (
        <div className="footer">
            <div className="footer-links">
                {links.map((link, index) => (
                    <button 
                        key={index} 
                        onClick={() => navigateTo(link.value)} 
                        aria-label={`Go to ${link.name}`}
                        className='footer-link'
                    >
                        {link.name}
                    </button>
                ))}
            </div>
            <p className='text'>{text}</p>
        </div>
    );
};

export default Footer;
