import './App.css';
import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './components/ProfileSelector';
import React, { useState, useEffect } from 'react';
import MatchList from './components/MatchList';
import ChatScreen from './components/ChatScreen';

const fetchRandomProfile = async () => {
  const response = await fetch('http://localhost:8080/profiles/random');
  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }
  return response.json();
}


function App() {

  const loadRandomProfile = async () => {
    try {
      const profile = await fetchRandomProfile();
      SetCurrentProfile(profile);
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    loadRandomProfile();
  }, [])

  const [currentScreen, SetCurrentScreen] = useState('profile')

  const [currentProfile, SetCurrentProfile] = useState(null)

  const saveSwipe = async (profileId) => {
    const response = await fetch('http://localhost:8080/matches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ profileId })
    });
    if (!response.ok) {
      throw new Error("Failed to save mateches")
    }
  }


  const onSwipe = (profileId, direction) => {
    if (direction == 'right') {
      saveSwipe(profileId)
    }
    loadRandomProfile();
  }
  const renderScreen = () => {

    switch (currentScreen) {
      case 'profile':
        return <ProfileSelector profile={currentProfile} onSwipe={onSwipe} />;
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
