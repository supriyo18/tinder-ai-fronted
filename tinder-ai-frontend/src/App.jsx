import './App.css';
import { User, MessageCircle } from 'lucide-react';

const ProfileSelector = () => {
  return (
    <div className='rounded-lg overflow-hidden bg-white shadow-lg'>
      <div className='relative p-4'>
        <img
          src="http://localhost:8080/images/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg"
          alt="Profile"  // Adding alt attribute
          className="w-full h-auto"  // Ensure the image fits the container
        />
        <div className='absolute bottom-0 left-0 right-0 text-white bg-gradient-to-t from-gray-600 to-transparent'>
          <h2 className='text-3xl font-semibold'>Shreyaa , 29</h2>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <div className='max-w-md mx-auto pt-8'>
        <nav className='flex justify-between space-x-4'>
          <User />
          <MessageCircle />
        </nav>
        <ProfileSelector />
      </div>
    </>
  );
}

export default App;
