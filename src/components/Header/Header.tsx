import * as React from 'react';
import './Header.css';

// Define types for props
interface Link {
    name: string;
    value: string;
}

interface HeaderProps {
    links: Link[];
    logoUrl?: string;
    title?: string; // Optional title
}

const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
};

const Header: React.FC<HeaderProps> = ({ links, logoUrl, title }) => {
    return (
        <div className="header">
            <button onClick={() => navigateTo(`/`)} className='logo'>
                {logoUrl ? (
                    <img className='logo-image' src={logoUrl} alt="Logo" />
                ) : (
                    <h1 >{title || 'LOGO'}</h1>
                )}
            </button>

            <div className="links">
                {links.map((link, index) => (
                    <button className='link-button' key={index} onClick={() => navigateTo(link.value)}>
                        {link.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Header;
