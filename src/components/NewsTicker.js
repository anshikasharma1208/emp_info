import React from 'react';
import './NewsTicker.css';

const NewsTicker = ({ news }) => {
  return (
    <div className="news-ticker">
      <div className="ticker-content">
        {news.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="ticker-item" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
