import React from 'react';
import './SuccessView.css';
import catLove2 from '../assets/Cat Love GIF by NGcorpvtc-2.gif';
import catLove3 from '../assets/Cat Love GIF by NGcorpvtc-3.gif';
import catLove from '../assets/Cat Love GIF by NGcorpvtc.gif';
import huggingHug from '../assets/Hugging Hug GIF.gif';

const SuccessView = () => {
    return (
        <div className="success-container">
            <h1 className="success-text">Yaay! I knew you would say yes! ❤️</h1>

            <div className="gif-container">
                <img src={catLove} alt="Cat Love" className="cute-gif" />
                <img src={huggingHug} alt="Hugging Hug" className="cute-gif" />
                <img src={catLove2} alt="Cat Love 2" className="cute-gif" />
                <img src={catLove3} alt="Cat Love 3" className="cute-gif" />
            </div>

            <p className="wholesome-message">
                Best Valentine ever!
            </p>
        </div>
    );
};

export default SuccessView;
