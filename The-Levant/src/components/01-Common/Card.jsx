import React from 'react';

const Card = ({ title, description, image, actionLabel, onAction }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                {actionLabel && (
                    <button
                        onClick={onAction}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {actionLabel}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
