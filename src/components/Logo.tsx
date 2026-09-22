import React from 'react';
import logoNox4 from '../assets/logo-nox4.png';

interface LogoProps {
  className?: string;
  variant?: 'official' | 'icon' | 'stacked' | 'full' | 'horizontal';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  onClick,
}) => {
  const hasHeightClass = /\bh-\w+|\bmax-h-\w+/.test(className);

  const sizeClasses: Record<string, string> = {
    sm: 'h-12 sm:h-14 w-auto',
    md: 'h-16 sm:h-20 w-auto',
    lg: 'h-24 sm:h-28 w-auto',
    xl: 'h-32 sm:h-36 w-auto',
  };

  const computedClass = `${hasHeightClass ? '' : sizeClasses[size] || 'h-16 w-auto'} ${className} object-contain select-none`;

  return (
    <img
      src={logoNox4}
      alt="NOX4 - Aceleradora de Resultados"
      onClick={onClick}
      className={computedClass.trim()}
      loading="eager"
    />
  );
};
