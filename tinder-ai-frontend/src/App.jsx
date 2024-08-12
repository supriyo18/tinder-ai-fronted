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

  const loadMatches = async () => {
    try {
      const profile = await fetchMatch();
      SetMatches(profile);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    loadRandomProfile();
    loadMatches();
  }, [])

  const [currentScreen, SetCurrentScreen] = useState('profile')

  const [currentProfile, SetCurrentProfile] = useState(null)

  const [matches, SetMatches] = useState([])

  const saveSwipe = async (profileId) => {
    try {
      const response = await fetch('http://localhost:8080/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ profileId })
      });
      if (!response.ok) {
        throw new Error("Failed to save matches");
      }
    } catch (error) {
      console.error('Error saving swipe:', error);
      throw error;  // Rethrow to handle in the calling function
    }
  }


  const fetchMatch = async () => {
    const response = await fetch('http://localhost:8080/matches');
    if (!response.ok) {
      throw new Error("Failed to save mateches")
    }
    return response.json();
  }


  const onSwipe = async (profileId, direction) => {
    loadRandomProfile();  // Load a new profile regardless of swipe direction
    if (direction === 'right') {
      try {
        await saveSwipe(profileId);  // Ensure saveSwipe is completed before loading matches
        await loadMatches();  // Load the latest matches after saving the swipe
      } catch (error) {
        console.error('Error during swipe:', error);
      }
    }
  }

  const renderScreen = () => {

    switch (currentScreen) {
      case 'profile':
        return <ProfileSelector profile={currentProfile} onSwipe={onSwipe} />;
      case 'matches':
        return <MatchList matches={matches} onSelectMatch={() => SetCurrentScreen('chat')} />;
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
