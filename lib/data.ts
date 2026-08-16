export const site = {
  name: "Target Transportation",
  tagline: "Khobar \u21C4 Bahrain, one fixed fare, zero surprises.",
  phone: "+966 50 287 8792",
  phoneHref: "tel:+966502878792",
  whatsapp: "https://wa.me/966502878792",
  whatsappText:
    "Hello, I am contacting you through your Target Transportation website. I would like to know more about your booking process, available services, and pricing.",
  email: "fahad.irshad39@gmail.com",
  address: "22 St, Al Aqrabiyah, Al Khobar 34445, Saudi Arabia",
  facebook: "https://www.facebook.com/targettransportationofficial/",
  instagram: "https://www.instagram.com/targettransportation.co/",
};

export function waLink(text?: string) {
  const msg = encodeURIComponent(text ?? site.whatsappText);
  return `${site.whatsapp}?text=${msg}`;
}

export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "How much does a taxi from Khobar to Bahrain cost?",
    a: "Our standard fare is SAR 300 per car, one-way, fixed in advance. There are no meter charges and no extra fees for reasonable luggage or waiting time at the border.",
  },
  {
    q: "How long does the crossing take?",
    a: "Typically 45\u201360 minutes from Al Khobar to Manama, depending on traffic at the King Fahd Causeway checkpoints. Our drivers know the fastest lanes and documentation process.",
  },
  {
    q: "What documents do I need for the border crossing?",
    a: "You'll need a valid passport or ID accepted for GCC travel, and any visa required for your nationality to enter Bahrain. Our drivers can guide you through the checkpoint process.",
  },
  {
    q: "Can I book last minute or at night?",
    a: "Yes. We run 24/7, so you can book any time of day through WhatsApp or by phone and get a driver assigned quickly.",
  },
  {
    q: "Can I cancel or change my booking?",
    a: "Yes, cancellations made more than 48 hours before your pickup time are free of charge. Contact us on WhatsApp to reschedule.",
  },
  {
    q: "What kind of vehicles do you use?",
    a: "You can choose between a Sedan or an SUV & Mid-Size SUV \u2014 both air-conditioned, comfortable, and driven by licensed, experienced drivers.",
  },
  {
    q: "Is this service better than using a ride-hailing app?",
    a: "For cross-border trips, yes \u2014 ride-hailing apps generally can't take you across the King Fahd Causeway. We specialize in that crossing with a fixed, upfront fare.",
  },
  {
    q: "Is your taxi service available 24/7?",
    a: "Yes, we operate every day, around the clock. Message us any time and we'll confirm a driver.",
  },
  {
    q: "Is Target Transportation a licensed company?",
    a: "Yes, we operate as a licensed transport provider based in Al Khobar, with drivers trained on cross-border documentation and procedures.",
  },
  {
    q: "How do I request a private driver by the hour?",
    a: "Message us on WhatsApp with the date, number of hours, and pickup location, and we'll confirm your fixed hourly rate and vehicle.",
  },
];

export type FleetCategory = {
  name: string;
  description: string;
  image: string;
};

export const fleet: FleetCategory[] = [
  {
    name: "Sedan",
    description:
      "A comfortable, fuel-efficient option for solo travelers or small groups making the crossing with light luggage.",
    image: "/images/sedan.png",
  },
  {
    name: "SUV & Mid-Size SUV",
    description:
      "Extra space and a smoother ride for families, groups, or anyone with more luggage \u2014 our most-booked option for the causeway route.",
    image: "/images/suv.png",
  },
];

export type Driver = {
  name: string;
  role: string;
};

export const drivers: Driver[] = [
  { name: "Imran Sheikh", role: "Driver" },
  { name: "Salman Khan", role: "Driver" },
  { name: "Ayaan Mirza", role: "Driver" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  points: string[];
  fromPrice?: string;
};

export const services: Service[] = [
  {
    slug: "khobar-bahrain-cross-border",
    name: "Khobar \u2013 Bahrain Cross-Border Taxi",
    short: "Our flagship route across the King Fahd Causeway.",
    description:
      "A fixed-fare private transfer between Al Khobar and Bahrain, run by drivers who cross the King Fahd Causeway daily and know the checkpoints, paperwork, and quickest lanes.",
    points: [
      "Fixed fare, no meter and no surprise add-ons",
      "45\u201360 minutes depending on border traffic",
      "Drivers experienced with customs and documentation",
      "Available around the clock, every day of the week",
    ],
    fromPrice: "SAR 300",
  },
  {
    slug: "airport-transfers",
    name: "Airport Transfers",
    short: "Dammam and Bahrain airport pickups and drop-offs.",
    description:
      "Door-to-door transfers to and from King Fahd International (Dammam) and Bahrain International Airport, with flight-aware pickup timing so you're never left waiting.",
    points: [
      "Flight tracking for on-time pickup",
      "Meet-and-greet at arrivals",
      "Fixed pricing agreed before you travel",
      "Comfortable SUVs with room for luggage",
    ],
  },
  {
    slug: "executive-suv-chauffeur",
    name: "Private Driver by the Hour",
    short: "A licensed driver and a comfortable car, by the hour or the trip.",
    description:
      "A licensed chauffeur and a comfortable Sedan or SUV for business travel, diplomatic visits, or a more flexible way to see the Eastern Province and Bahrain \u2014 fixed hourly rates, no surge pricing.",
    points: [
      "Choice of Sedan or SUV & Mid-Size SUV",
      "Professionally trained, uniformed drivers",
      "Ideal for meetings, delegations, and airport greetings",
      "Hourly or point-to-point booking",
    ],
  },
  {
    slug: "corporate-accounts",
    name: "Corporate & Recurring Travel",
    short: "Standing arrangements for companies and frequent travelers.",
    description:
      "For businesses that move staff or clients between the Eastern Province and Bahrain regularly, we set up simple recurring bookings and consolidated invoicing.",
    points: [
      "Priority booking for regular commuters",
      "Consolidated monthly invoicing on request",
      "Consistent drivers for repeat trips",
      "Direct WhatsApp line for scheduling",
    ],
  },
];

export type RouteInfo = {
  slug: string;
  from: string;
  to: string;
  duration: string;
  price: string;
  blurb: string;
};

export const routes: RouteInfo[] = [
  {
    slug: "khobar-to-bahrain-taxi",
    from: "Al Khobar",
    to: "Bahrain",
    duration: "45\u201360 min",
    price: "SAR 300",
    blurb: "Our most-booked crossing, direct over the King Fahd Causeway.",
  },
  {
    slug: "bahrain-to-khobar-taxi",
    from: "Bahrain",
    to: "Al Khobar",
    duration: "45\u201360 min",
    price: "SAR 300",
    blurb: "The return leg, same fixed fare, same causeway route.",
  },
  {
    slug: "dammam-to-bahrain-taxi",
    from: "Dammam",
    to: "Bahrain",
    duration: "60\u201390 min",
    price: "SAR 180\u2013300",
    blurb: "Pickup anywhere in Dammam, straight through to Manama.",
  },
  {
    slug: "bahrain-to-dammam-taxi",
    from: "Bahrain",
    to: "Dammam",
    duration: "60\u201390 min",
    price: "SAR 180\u2013300",
    blurb: "Comfortable return transfer from Bahrain into Dammam.",
  },
  {
    slug: "taxi-riyadh-to-bahrain",
    from: "Riyadh",
    to: "Bahrain",
    duration: "5\u20136 hrs",
    price: "Get quote",
    blurb: "Long-distance private transfer across the Kingdom to Bahrain.",
  },
  {
    slug: "riyadh-to-qatar-taxi",
    from: "Riyadh",
    to: "Qatar",
    duration: "7\u20138 hrs",
    price: "Get quote",
    blurb: "Intercity transfer for travelers heading on to Doha.",
  },
  {
    slug: "taxi-qatar-to-riyadh",
    from: "Qatar",
    to: "Riyadh",
    duration: "7\u20138 hrs",
    price: "Get quote",
    blurb: "Return long-haul transfer from Qatar into Riyadh.",
  },
  {
    slug: "khobar-to-dammam-airport-taxi",
    from: "Al Khobar",
    to: "Dammam Airport",
    duration: "25\u201335 min",
    price: "SAR 120",
    blurb: "Quick, flight-timed transfer to King Fahd International.",
  },
  {
    slug: "khobar-to-riyadh-airport-taxi",
    from: "Al Khobar",
    to: "Riyadh Airport",
    duration: "4\u20135 hrs",
    price: "Get quote",
    blurb: "Private long-distance run to King Khalid International.",
  },
  {
    slug: "jubail-to-dammam-airport-taxi",
    from: "Jubail",
    to: "Dammam Airport",
    duration: "45\u201355 min",
    price: "SAR 180",
    blurb: "Reliable airport transfer for Jubail residents and visitors.",
  },
  {
    slug: "taxi-jubail-to-riyadh",
    from: "Jubail",
    to: "Riyadh",
    duration: "4.5\u20135.5 hrs",
    price: "Get quote",
    blurb: "Industrial-city-to-capital transfer, fixed fare on request.",
  },
  {
    slug: "riyadh-to-jubail-taxi",
    from: "Riyadh",
    to: "Jubail",
    duration: "4.5\u20135.5 hrs",
    price: "Get quote",
    blurb: "Return leg from Riyadh back to Jubail.",
  },
  {
    slug: "dammam-airport-to-khobar-taxi",
    from: "Dammam Airport",
    to: "Al Khobar",
    duration: "25\u201335 min",
    price: "SAR 120",
    blurb: "Arrivals pickup with flight tracking, straight to Al Khobar.",
  },
  {
    slug: "dammam-airport-to-bahrain-taxi",
    from: "Dammam Airport",
    to: "Bahrain",
    duration: "70\u201385 min",
    price: "SAR 340",
    blurb: "Land straight into a private transfer across the causeway.",
  },
];
