import React, { useState, useEffect } from 'react';
import './QuestionView.css';

const QuestionView = ({ onSuccess }) => {
    const [noBtnStyle, setNoBtnStyle] = useState({});
    const [yesBtnSize, setYesBtnSize] = useState(1);
    const [interactionCount, setInteractionCount] = useState(0);

    const messages = [
        "Bhak",
        "Nahi",
        "Katapi nahi",
        "Bilkul nahi",
        "Oh jhantu Singh Chaubey na samajh nahi aa raha hai?",
    ];

    const getNoButtonText = () => {
        return messages[Math.min(interactionCount, messages.length - 1)];
    };

    const handleNoInteraction = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        setNoBtnStyle({
            position: 'fixed',
            left: `${x}px`,
            top: `${y}px`,
        });

        setYesBtnSize((prev) => prev * 1.2);
        setInteractionCount((prev) => prev + 1);
    };

    return (
        <div className="question-container">
            <h1 className="question-text">Will you be my Valentine?</h1>
            <div className="buttons-container">
                <button
                    className="yes-button"
                    style={{ fontSize: `${yesBtnSize}rem` }}
                    onClick={onSuccess}
                >
                    Yes
                </button>
                <button
                    className="no-button"
                    style={noBtnStyle}
                    onMouseEnter={handleNoInteraction}
                    onClick={handleNoInteraction} // For mobile
                >
                    {getNoButtonText()}
                </button>
            </div>
        </div>
    );
};

export default QuestionView;
