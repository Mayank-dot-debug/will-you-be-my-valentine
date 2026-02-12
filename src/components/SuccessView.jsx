import React from 'react';
import './SuccessView.css';
import pic1 from '../assets/pics/3069326d-a0e4-4a20-8855-85fbc7bf317a.JPG';
import pic2 from '../assets/pics/33657198-8671-4b2c-8d3b-04f14506e370.JPG';
import pic3 from '../assets/pics/5fa0c54f-29a1-4f70-b53f-b8f2d3de781c.JPG';
import pic4 from '../assets/pics/669feccb-8b3e-4a7a-83a2-cc5a0e7fee48.JPG';
import pic5 from '../assets/pics/89d6343e-71e8-4bd2-a6bd-73d2ab55fa63.JPG';
import pic6 from '../assets/pics/9ae971db-879b-4943-b367-8e8ce5abe14e.JPG';

const SuccessView = () => {
    return (
        <div className="success-container">
            <h1 className="success-text">Hayee chori Maan gayi. ❤️</h1>

            <div className="gif-container">
                <img src={pic1} alt="Success 1" className="cute-gif" />
                <img src={pic2} alt="Success 2" className="cute-gif" />
                <img src={pic3} alt="Success 3" className="cute-gif" />
                <img src={pic4} alt="Success 4" className="cute-gif" />
                <img src={pic5} alt="Success 5" className="cute-gif" />
                <img src={pic6} alt="Success 6" className="cute-gif" />
            </div>

            <p className="wholesome-message">
                Best Valentine ever!
            </p>
        </div>
    );
};

export default SuccessView;
