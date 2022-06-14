import React from 'react';

export default function Header() {
  return (
    <div className="heading">
      <h1 className="title">2048</h1>
      <div className="scores-container">
        <div className="score-container">
          364<div className="score-addition">+20</div>
        </div>
        <div className="best-container">423</div>
      </div>
    </div>
  );
}
