import React from 'react';
import './UserInfo.css';

const UserInfo = ({ register, errors }) => {
    return (
        <div className="section">
            <h3 className="heading">1. User Information</h3>

            <div className="field">
                <label htmlFor="name">Full Name</label>
                {errors.name && <span className="error">Error: {errors.name.message}</span>}
                <input
                    id="name"
                    type="text"
                    className="input"
                    placeholder="Mahmoud Sofan"
                    {...register('name', { required: 'Full Name is required' })}
                />
            </div>

            <div className="field">
                <label htmlFor="email">Email Address</label>
                {errors.email && <span className="error">Error: {errors.email.message}</span>}
                <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder="mahmoud@example.com"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                />
            </div>

            <div className="field">
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && <span className="error">Error: {errors.phone.message}</span>}
                <input
                    id="phone"
                    type="tel"
                    className="input"
                    placeholder="0591234567"
                    {...register('phone', { required: 'Phone number is required' })}
                />
            </div>
        </div>
    );
};

export default UserInfo;
