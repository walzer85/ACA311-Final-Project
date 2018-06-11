import React from 'react';

function SpecialText(props) {
  return (
      <div>
        <p>My Name: {props.name}</p>
        <p>Instrument I'm looking for: {props.instrument}</p>
        <p>My Genre: {props.genre}</p>
      </div>
  );
}
export default SpecialText;