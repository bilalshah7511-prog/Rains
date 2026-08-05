export const brand = {
  name: 'Rains',
  logoSrc: '/rains-logo.png',
  freeShippingThreshold: 50,
  tagline: 'Urban outdoors',
};

const blackImages = [
  { src: '/images/rains/bp-black-1.jpg', alt: 'Rains Backpack in Black', showBadge: true },
  { src: '/images/rains/bp-black-2.jpg', alt: 'Rains Backpack Black side view' },
  { src: '/images/rains/bp-black-3.jpg', alt: 'Rains Backpack Black detail' },
  { src: '/images/rains/bp-black-4.jpg', alt: 'Rains Backpack Black lifestyle' },
  { src: '/images/rains/bp-detail.jpg', alt: 'Rains Backpack detail' },
];

const greenImages = [
  { src: '/images/rains/bp-green-1.jpg', alt: 'Rains Backpack in Green', showBadge: true },
  { src: '/images/rains/bp-green-2.jpg', alt: 'Rains Backpack Green alternate' },
  { src: '/images/rains/bp-detail.jpg', alt: 'Rains Backpack detail' },
];

const greyImages = [
  { src: '/images/rains/bp-grey-1.jpg', alt: 'Rains Backpack in Dark Grey', showBadge: true },
  { src: '/images/rains/bp-grey-2.jpg', alt: 'Rains Backpack Dark Grey lifestyle' },
  { src: '/images/rains/bp-detail.jpg', alt: 'Rains Backpack detail' },
];

export const product = {
  title: 'Backpack',
  subtitle: 'Waterproof · Everyday carry',
  badge: 'Best Seller',
  rating: 5,
  reviewCount: 2140,
  description:
    'A waterproof everyday backpack built for the urban outdoors. Clean Scandinavian design with durable coated fabric, padded straps, and space for a 15" laptop.',
  serving: 'Ideal for commute, travel, and wet-weather days.',
  images: blackImages,
  colors: [
    { id: 'black', label: 'Black', hex: '#111111', images: blackImages },
    { id: 'green', label: 'Green', hex: '#3d5c45', images: greenImages },
    { id: 'dark-grey', label: 'Dark Grey', hex: '#4a4a4a', images: greyImages },
  ],
  sizes: [
    { id: 'one-size', label: 'One Size', price: 140 },
  ],
  frequencies: [],
  benefits: [
    'Waterproof coated fabric',
    'Fits up to a 15" laptop',
    'Padded shoulder straps',
    'Clean Scandinavian design',
    '2-year warranty',
  ],
  ingredients: 'Coated polyester. Water-resistant zippers. PU coating.',
  howToUse: 'Wipe clean with a damp cloth. Do not machine wash. Air dry.',
};

export const shippingOptions = [
  { value: 'Ground - $5.99', title: 'Ground', subtitle: '5-7 business days', price: '$5.99' },
  { value: 'Express - $12.99', title: 'Express', subtitle: '2-3 business days', price: '$12.99' },
  { value: 'Overnight - $24.99', title: 'Overnight', subtitle: 'Next business day', price: '$24.99' },
];

export const pickupLocations = [
  { name: 'NYC Store', address: '120 Broadway, New York, NY 10271', dist: '0.2 mi' },
  { name: 'LA Studio', address: '8600 Melrose Ave, West Hollywood, CA 90069', dist: '0.4 mi' },
  { name: 'SF Locker', address: '500 Pine St, San Francisco, CA 94108', dist: '0.5 mi' },
];

export const timeSlots = ['9am-10am', '10am-11am', '11am-12pm', '1pm-2pm', '2pm-3pm'];

export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
