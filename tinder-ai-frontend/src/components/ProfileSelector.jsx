import { X, Heart } from 'lucide-react';


function ProfileSelector({ profile, onSwipe }) {
    if (!profile) {
        return <div>Loading...</div>;
    }
    return (

        <div className='rounded-lg overflow-hidden bg-white shadow-lg'>
            <div className='relative p-4'>
                <img
                    src={'http://localhost:8080/images/' + profile.imageUrl}
                    alt="Profile"  // Adding alt attribute
                    className="w-full h-auto"  // Ensure the image fits the container
                />
                <div className='absolute bottom-0 left-0 right-0 text-white bg-gradient-to-t from-gray-600 to-transparent'>
                    <h2 className='text-3xl font-semibold'>{profile.firstName} {profile.lastName} , {profile.age}</h2>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-gray-700 mb-4'>{profile.bio}</p>
            </div>

            <div className='p-4 flex justify-center space-x-4'>
                <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'
                    onClick={() => onSwipe("left")}
                >
                    <X size={24} />
                </button>
                <button className='bg-green-500 rounded-full  p-4 text-white hover:bg-green-700'
                    onClick={() => onSwipe("right")}
                >
                    <Heart size={24} />
                </button>
            </div>

        </div>
    );
}

export default ProfileSelector;