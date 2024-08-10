import './App.css';
import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './components/ProfileSelector';

import MatchList from './components/MatchList';

function App() {
  return (
    <>
      <div className='max-w-md mx-auto pt-8'>
        <nav className='flex justify-between space-x-4'>
          <User />
          <MessageCircle />
        </nav>
        <ProfileSelector />
        {/* <MatchList />*/}
      </div>
    </>
  );
}

export default App;
