import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string; // Text displayed on the button
  onClick?: () => void; // Optional click handler
  type?: 'button' | 'submit' | 'reset'; // Button types
  variant?: 'primary' | 'secondary' | 'third' | 'danger'; // Button styling variants
  isDisabled?: boolean; // Optional disabled state
  className?: string; // Custom classes for additional styling
  asLink?: boolean; // Render as a link
  href?: string; // URL for link rendering
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  isDisabled = false,
  className = '',
  asLink = false,
  href = '#',
}) => {
  const baseStyles = 'px-4 py-2 border-2 rounded-full font-semibold transition-all duration-300';
  const variantStyles = {
    primary: 'bg-nice-blue hover:bg-white text-white hover:text-nice-blue border-nice-blue',
    secondary: 'bg-white border-nice-blue text-nice-blue hover:text-white hover:bg-nice-blue',
    third: 'bg-jordy-blue hover:bg-white text-white hover:text-nice-blue border-jordy-blue hover:border-white',
    danger: 'bg-red-500 hover:bg-red-600',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (asLink) {
    return (
      <Link
        href={href}
        className={`${combinedStyles} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-disabled={isDisabled}
      >
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex flex-row p-6 gap-2 ${combinedStyles} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default Button;
