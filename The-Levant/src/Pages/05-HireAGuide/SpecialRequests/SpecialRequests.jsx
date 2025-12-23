import React from 'react';
import './SpecialRequests.css';

const SpecialRequests = ({ register, errors }) => {
    return (
        <div className="section">
            <h3 className="heading">5. Special Requests</h3>

            <div className="field">
                <label htmlFor="specialRequests">Any special requests or notes?</label>
                <textarea
                    id="specialRequests"
                    className="textarea"
                    placeholder="Put Your Special Requests or Notes."
                    {...register('specialRequests')}
                ></textarea>
            </div>
        </div>
    );
};

export default SpecialRequests;
