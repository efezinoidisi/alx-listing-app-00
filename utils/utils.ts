import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
  }
) {
  const date = new Date(dateString);

  return date.toLocaleDateString('en-US', options);
}

export function formatCurrency(
  value: number,
  options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }
) {
  return value.toLocaleString('en-US', options);
}
