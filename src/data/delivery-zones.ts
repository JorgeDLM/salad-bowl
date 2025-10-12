import { DeliveryZone } from '@/types/regalazo';

export const deliveryZones: DeliveryZone[] = [
  {
    name: 'CDMX Centro',
    sameDayCutoffHour: 12,
    postalCodes: [
      '06000', '06010', '06020', '06030', '06040', '06050',
      '06100', '06140', '06170', '06200', '06300', '06400',
      '06500', '06600', '06700', '06800', '06820', '06840',
    ],
  },
  {
    name: 'CDMX Sur',
    sameDayCutoffHour: 12,
    postalCodes: [
      '04000', '04010', '04100', '04200', '04300', '04330',
      '04400', '04500', '04600', '04700', '04800', '04900',
    ],
  },
  {
    name: 'CDMX Poniente',
    sameDayCutoffHour: 12,
    postalCodes: [
      '11000', '11100', '11200', '11300', '11400', '11500',
      '11700', '11800', '11850', '05000', '05100', '05200',
    ],
  },
  {
    name: 'CDMX Norte',
    sameDayCutoffHour: 12,
    postalCodes: [
      '02000', '02100', '02200', '02300', '02400', '02600',
      '07000', '07050', '07100', '07200', '07300', '07400',
    ],
  },
  {
    name: 'Zona Metropolitana',
    sameDayCutoffHour: 11,
    postalCodes: [
      '53000', '53100', '53200', '53300', '53400', '53500',
      '54000', '54050', '54100', '54150', '54200', '54700',
      '54800', '54900', '55000', '55100', '55200', '55700',
    ],
  },
];
