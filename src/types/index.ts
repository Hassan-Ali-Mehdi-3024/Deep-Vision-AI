import { ReactNode } from 'react';

export interface SectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

export interface TaskProps {
  number: string;
  title: string;
  children: ReactNode;
}
