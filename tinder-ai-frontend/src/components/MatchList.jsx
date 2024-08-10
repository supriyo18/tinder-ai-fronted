import React from 'react';

const MatchList = () => {
    return (
        <div className='rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-bold mb-4'>Matches</h2>
            <ul>
                {[
                    { id: 1, firstname: 'Chandrani', lastName: 'Mukherjee', photo: 'http://localhost:8080/images/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg' },
                    { id: 2, firstname: 'Rampurmoyi', lastName: 'Das', photo: 'http://localhost:8080/images/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg' }

                ].map(key => {
                    return (
                        <li key={key.id} className="flex items-center space-x-4">
                            <button className='w-full hover:bg-green-50 flex items-center'>
                                <img src={key.photo} alt={`${key.firstname} ${key.lastName}`} className='w-16 h-16 rounded-full mr-3' />
                                <span>
                                    <h3 className="font-bold">{key.firstname} {key.lastName}</h3>
                                    <p>Software Engineer</p>
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MatchList;
