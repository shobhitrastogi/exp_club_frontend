import React from 'react';
import { useSelector } from 'react-redux';

const MatchList = () => {
  const matches = useSelector((state) => state.matches);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Potential Matches</h2>
      <ul>
        {matches.map((match) => (
          <li key={match.id} className="border-b border-gray-300 py-2">
            <h3 className="text-xl font-semibold">{match.bookTitle}</h3>
            <p className="text-gray-600">Matched with: {match.otherUser}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
