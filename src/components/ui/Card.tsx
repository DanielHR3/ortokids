import React from 'react';

interface CardProps {
  className?: string;
  reveal?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  className = '',
  reveal = false,
  children,
}) => {
  const cardClass = `card ${reveal ? 'reveal' : ''} ${className}`;

  return (
    <div className={cardClass}>
      {children}
    </div>
  );
};
