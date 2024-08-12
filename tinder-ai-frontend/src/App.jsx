import './App.css';
import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './components/ProfileSelector';
import React, { useState } from 'react';
import MatchList from './components/MatchList';
import ChatScreen from './components/ChatScreen';

function App() {
  const [currentScreen, SetCurrentScreen] = useState('profile')

  const renderScreen = () => {

    switch (currentScreen) {
      case 'profile':
        return <ProfileSelector />;
      case 'matches':
        return <MatchList onSelectMatch={() => SetCurrentScreen('chat')} />;
      case 'chat':
        return <ChatScreen />
    }
  }
  return (
    <>
      <div className='max-w-md mx-auto pt-8'>
        <nav className='flex justify-between space-x-4'>
          <User onClick={() => SetCurrentScreen('profile')} />
          <MessageCircle onClick={() => SetCurrentScreen('matches')} />
        </nav>
        {renderScreen()}
      </div>
    </>
  );
}

export default App;
