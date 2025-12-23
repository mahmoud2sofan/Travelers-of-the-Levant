import React from 'react';
import { useForm } from 'react-hook-form';
import './HireAGuide.css';
import UserInfo from './UserInfo/UserInfo';
import TripInfo from './TripInfo/TripInfo';
import GuidePreferences from './GuidePreferences/GuidePreferences';

import SpecialRequests from './SpecialRequests/SpecialRequests';

import Nav from '../../Components/Nav/Nav';

const HireAGuide = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            userInfo: {
                name: data.name,
                email: data.email,
                phone: data.phone,
            },
            tripInfo: {
                country: data.country,
                cities: data.cities,
                startDate: data.startDate,
                endDate: data.endDate,
                travelers: data.travelers,
            },
            guidePreferences: {
                language: data.guideLanguage,
            },
            specialRequests: data.specialRequests,

        };

        const submitRequest = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Request submitted successfully!');
            } else {
                alert('Failed to submit request.');
            }
        };

    };

    return (
        <div className="container">
            <Nav />
            <h2 className="title">Hire A Guide</h2>
            <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                Fill out the form below to find the perfect guide for your trip.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <UserInfo register={register} errors={errors} />
                <TripInfo register={register} errors={errors} />
                <GuidePreferences register={register} errors={errors} />
                <SpecialRequests register={register} errors={errors} />


                <button type="submit" className="button">Submit Request</button>
            </form>
        </div>
    );
};

export default HireAGuide;
