import React from 'react';

const MatchList = ({ matches = [], onSelectMatch }) => {
    if (!Array.isArray(matches) || matches.length === 0) {
        return <div>No matches available</div>;
    }

    return (
        <div className='rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Matches</h2>
            <ul>
                {matches.map((key) => (
                    <li key={key.profile.id} className="flex items-center space-x-4">  {/* Use a unique identifier like key.id */}
                        <button
                            className='w-full hover:bg-green-50 flex items-center'
                            onClick={() => onSelectMatch(key)}
                        >
                            <img src={'http://localhost:8080/images/' + key.profile.imageUrl} alt={`${key.profile.firstName} ${key.profile.lastName}`} className='w-16 h-16 rounded-full mr-3' />
                            <span>
                                <h3 className="font-bold">{key.profile.firstName} {key.profile.lastName}</h3>

                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchList;
