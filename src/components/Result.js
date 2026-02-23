import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import './result.css';

const Result = () => {

  const counting = useSelector(state => state.battleReducer);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // 768px is typical tablet/mobile breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine how many items to show
  const itemsToShow = isSmallScreen && !isExpanded ? 3 : counting.length;
  const displayedItems = counting.slice(0, itemsToShow);
  const hasMoreItems = isSmallScreen && counting.length > 3;

    return (
        <>
        <h3>Pool</h3>
        {(!counting || counting.length === 0)? <div>No votes yet, choose your first</div> :
        <>
          <ul className="collection">
            {displayedItems.map((hero, pos) => (
              <li key={hero.id} className="collection-item">
                <div className="resultdiv">
                  <span>{pos+1} - {hero.name}</span>
                  <span className="badge red" data-badge-caption="votes">{hero.votes}</span>
                </div>
              </li>
            ))}
          </ul>
          {hasMoreItems && (
            <button
              className="btn waves-effect waves-light expand-button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : `Show All (${counting.length})`}
            </button>
          )}
        </>
        }
        </>
    )
}

export default Result;