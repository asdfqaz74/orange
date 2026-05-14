import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { cn } from '@/shared/utils/cn';

type BaseProps = {
  label: string;
  id: string;
  className?: string;
};

type TextFieldProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { multiline?: false };
type TextAreaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { multiline: true };

const fieldClass = 'w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-3 text-body-md text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';

export function TextField(props: TextFieldProps | TextAreaProps) {
  const { label, id, className, multiline, ...fieldProps } = props;

  return (
    <div className={className}>
      <label className="mb-1 block text-label-sm text-on-surface-variant" htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea id={id} className={cn(fieldClass, 'resize-none')} {...(fieldProps as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={id} className={fieldClass} {...(fieldProps as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </div>
  );
}
