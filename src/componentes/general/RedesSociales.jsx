import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const RedesSociales = () => {
    return (
        <div className="redes-sociales">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-icon" />
            </a>
        </div>
    );
};

export default RedesSociales;
