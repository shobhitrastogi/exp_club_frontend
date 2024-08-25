import React from 'react';
import MatchList from '../components/MatchList';

const MatchmakingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Book Matches</h1>
      <MatchList />
    </div>
  );
};

export default MatchmakingPage;
