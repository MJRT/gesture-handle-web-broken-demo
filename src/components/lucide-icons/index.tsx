import type { LucideProps } from 'lucide-react';
import { icons } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

export type IconNames = keyof typeof icons;
export const DEFAULT_ICON_CLASS_NAME: string = 'text-accent-foreground h-8 w-8';

export interface LucideIconsProps extends LucideProps {
  name: IconNames;
  className?: string;
}

const LucideIcons = ({ name, className, ...otherProps }: LucideIconsProps) => {
  const Icons = icons[name];

  if (!Icons) {
    return null;
  }

  return (
    <Icons className={cn(DEFAULT_ICON_CLASS_NAME, className)} {...otherProps} />
  );
};

LucideIcons.displayName = 'LucideIcons';

export default LucideIcons;
