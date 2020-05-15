import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import BattleHero from './BattleHero';

function App() {

  const content = useSelector(state => state);

  useEffect(() => {
    
  }, []);

  console.log(content);

  return (
    <div className="App">
      <BattleHero />
      {content.data && (<div>{content.data.attributionText}</div>)}
    </div>
  );
}

export default App;
