import React from 'react';
import './TripInfo.css';

const TripInfo = ({ register, errors }) => {
    return (
        <div className="section">
            <h3 className="heading">2. Trip Information</h3>

            <div className="field">
                <label htmlFor="country">Country</label>
                {errors.country && <span className="error">Error: {errors.country.message}</span>}
                <input
                    id="country"
                    type="text"
                    className="input"
                    placeholder="Jerusalem"
                    {...register('country', { required: 'Country is required' })}
                />
            </div>

            <div className="field">
                <label htmlFor="cities">Cities</label>
                {errors.cities && <span className="error">Error: {errors.cities.message}</span>}
                <input
                    id="cities"
                    type="text"
                    className="input"
                    placeholder="Nablus, Jerusalem, Hebron"
                    {...register('cities', { required: 'Cities are required' })}
                />
            </div>

            <div className="field">
                <label htmlFor="startDate">Start Date</label>
                {errors.startDate && <span className="error">Error: {errors.startDate.message}</span>}
                <input
                    id="startDate"
                    type="date"
                    className="input"
                    {...register('startDate', { required: 'Start Date is required' })}
                />
            </div>

            <div className="field">
                <label htmlFor="endDate">End Date</label>
                {errors.endDate && <span className="error">Error: {errors.endDate.message}</span>}
                <input
                    id="endDate"
                    type="date"
                    className="input"
                    {...register('endDate', { required: 'End Date is required' })}
                />
            </div>

            <div className="field">
                <label htmlFor="travelers">Number of Travelers</label>
                {errors.travelers && <span className="error">Error: {errors.travelers.message}</span>}
                <input
                    id="travelers"
                    type="number"
                    min="1"
                    className="input"
                    {...register('travelers', { required: 'Number of travelers is required', min: 1 })}
                />
            </div>


        </div>
    );
};

export default TripInfo;
