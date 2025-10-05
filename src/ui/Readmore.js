import React, { useState } from 'react';

function ReadMore({ text, maxChars = 200 }) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxChars;
  const displayText = expanded || !isLong
    ? text
    : text.substring(0, maxChars) + '…';

  return (
    <div>
      <p>{displayText}</p>
      {isLong && (
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}
export default ReadMore;