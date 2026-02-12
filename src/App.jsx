import React, { useState } from 'react';
import HeartsBackground from './components/HeartsBackground';
import QuestionView from './components/QuestionView';
import SuccessView from './components/SuccessView';
import './App.css';

function App() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="App">
      <HeartsBackground />
      {isSuccess ? (
        <SuccessView />
      ) : (
        <QuestionView onSuccess={() => setIsSuccess(true)} />
      )}
    </div>
  );
}

export default App;
