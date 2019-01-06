import React from 'react';

export default function ChoiceButton({ onClick, buttonText = '' }) {
  return (
    <button onClick={onClick}>{buttonText}</button>
  );
}
