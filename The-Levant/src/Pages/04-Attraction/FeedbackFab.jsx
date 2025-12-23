import React, { useState } from 'react';
import './FeedbackFab.css';

function FeedbackFab() {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSend = () => {
        if (!title || !body) {
            alert("Please fill in both fields.");
            return;
        }

        console.log(`Sending feedback to TheLevantTravellers@gmail.com`);
        console.log({ title, body });

        alert(`Feedback sent successfully!\nTitle: ${title}\nMessage sent to TheLevantTravellers@gmail.com`);

        setTitle('');
        setBody('');
        setIsOpen(false);
    };

    return (
        <div className="feedback-fab-container">
            {isOpen && (
                <div className="feedback-modal">
                    <h3>Send Feedback</h3>
                    <input
                        type="text"
                        placeholder="Subject"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Your message..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <button className="send-btn" onClick={handleSend}>Send</button>
                </div>
            )}
            <button className="feedback-fab" onClick={toggleOpen} title="Send Feedback">
                <img src="/Logo.png" alt="Feedback" className="fab-logo" />
            </button>
        </div>
    );
}

export default FeedbackFab;
