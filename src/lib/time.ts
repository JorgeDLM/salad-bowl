import { SITE } from '@/config';

export function isSameDayAvailable(): boolean {
  const now = new Date();
  const mexicoTime = new Date(now.toLocaleString('en-US', { timeZone: SITE.timezone }));
  const currentHour = mexicoTime.getHours();
  
  return currentHour < SITE.sameDayCutoffHour;
}

export function getMinDeliveryDate(): Date {
  const now = new Date();
  const mexicoTime = new Date(now.toLocaleString('en-US', { timeZone: SITE.timezone }));
  
  if (isSameDayAvailable()) {
    return mexicoTime;
  }
  
  // Next day
  mexicoTime.setDate(mexicoTime.getDate() + 1);
  return mexicoTime;
}

export function formatDateForWhatsApp(date: Date): string {
  return date.toLocaleDateString('es-MX', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
