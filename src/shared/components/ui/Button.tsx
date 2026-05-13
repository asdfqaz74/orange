import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-on-primary shadow-button-primary hover:bg-surface-tint',
  secondary: 'bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-container-low',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-on-primary',
  ghost: 'text-primary hover:bg-surface-container-low',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-gutter-mobile py-base text-label-sm',
  md: 'px-stack-md py-stack-sm text-label-md',
  lg: 'px-stack-md py-4 text-headline-md',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 active:scale-[0.99]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}
