import { Kit, KitVariant } from '@/types/regalazo';
import { SITE } from '@/config';

interface WhatsAppParams {
  phone?: string;
  kit: Kit;
  variant: KitVariant;
  date: string;
  slot: string;
  cp: string;
  note?: string;
  photo?: boolean;
}

export function buildWhatsAppURL({
  phone = SITE.whatsapp,
  kit,
  variant,
  date,
  slot,
  cp,
  note,
  photo,
}: WhatsAppParams): string {
  const base = `https://wa.me/${phone}`;
  
  let message = `Hola, quiero pedir este Regalazo:\n\n`;
  message += `🎁 *Kit:* ${kit.title}\n`;
  message += `💰 *Precio:* $${variant.tier.toLocaleString('es-MX')}\n`;
  message += `📦 *SKU:* ${variant.sku}\n\n`;
  message += `📅 *Fecha de entrega:* ${date}\n`;
  message += `🕐 *Horario:* ${slot}\n`;
  message += `📍 *CP:* ${cp}\n`;
  
  if (note) {
    message += `\n💌 *Mensaje en tarjeta:*\n"${note}"\n`;
  }
  
  if (photo) {
    message += `\n📸 Incluir foto impresa\n`;
  }
  
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}
