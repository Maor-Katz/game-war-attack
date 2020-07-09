import React, {useState} from 'react';

const ColorExplanation = () => {
    const [colors] = useState([
        {
            color: '#ffff80',
            explanation: 'Not Started',
            className: 'notStarted'
        },
        {
            color: '#99ccff',
            explanation: 'In Progress',
            className: 'inProgress'
        },
        {
            color: '#99ff99',
            explanation: 'Done',
            className: 'completed'
        }
    ]);
    return (
        <div className="colorsExplanationContainer">
            {
                colors.map((c, index) => <span className="colorExplanation" key={index}>
                    <span>{c.explanation}</span>
                    <span className={`color ${c.className}`}></span>
                </span>)
            }
        </div>
    );
};

export default ColorExplanation;