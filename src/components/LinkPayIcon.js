import React from 'react';

const LinkPayIcon = ({ size = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#607d8b"/>
    <path d="M35,40 Q25,50 35,60 L45,60 Q40,55 45,50 Q50,45 55,50 L65,40 Q55,30 45,40 Z" fill="#ffffff"/>
    <circle cx="60" cy="60" r="20" fill="#ffd700"/>
    <text x="60" y="65" fontFamily="Arial, sans-serif" fontSize="20" fill="#607d8b" textAnchor="middle">₹</text>
    <path d="M55,50 Q57.5,55 60,60" stroke="#ffffff" strokeWidth="3" fill="none"/>
  </svg>
);

export default LinkPayIcon;