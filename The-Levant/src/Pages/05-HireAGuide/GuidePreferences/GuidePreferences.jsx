import React from 'react';
import './GuidePreferences.css';

const GuidePreferences = ({ register, errors }) => {
    return (
        <div className="section">
            <h3 className="heading">3. Guide Preferences</h3>

            <div className="field">
                <label htmlFor="guideLanguage">Preferred Guide Language(s)</label>
                <select
                    id="guideLanguage"
                    className="select"
                    multiple
                    {...register('guideLanguage')}
                    style={{ height: '100px' }}
                >
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Italian">Italian</option>
                    <option value="Russian">Russian</option>
                    <option value="Chinese">Chinese</option>
                </select>
            </div>


        </div>
    );
};

export default GuidePreferences;
