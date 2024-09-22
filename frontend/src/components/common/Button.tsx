import { cn } from '@/lib/utils';
import React from 'react';

const Button = ({
  text,
  color = 'blue',
  type = 'button',
  opacity = 600,
  hoverOpacity = 700,
  className = '',
  onClick,
}: {
  text: string;
  color?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  opacity?: number;
  hoverOpacity?: number;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={cn(
        className +
          ` px-4 py-2 bg-${color}-${opacity} text-white font-bold rounded-md hover:bg-${color}-${hoverOpacity}`
      )}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
