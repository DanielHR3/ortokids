import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'light' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const btnClass = `btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''} ${
    fullWidth ? 'btn-full' : ''
  } ${className}`;

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
};
