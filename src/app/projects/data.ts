export type PropertyCategory = 'Buy' | 'Rent' | 'Plot' | 'Commercial';

export interface Property {
  id: string;
  title: string;
  place: string;
  price: string;
  description: string;
  image: string;
  category: PropertyCategory;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    place: 'Kochi, Kerala',
    price: '₹ 1.2 Cr',
    description: 'A stunning 3BHK apartment in the heart of the city, with all modern amenities.',
    image: 'project-1',
    category: 'Buy',
  },
  {
    id: '2',
    title: 'Spacious Family Villa',
    place: 'Trivandrum, Kerala',
    price: '₹ 85,000 / month',
    description: 'A beautiful 4-bedroom villa with a private garden, perfect for families.',
    image: 'project-2',
    category: 'Rent',
  },
  {
    id: '3',
    title: 'Prime Residential Plot',
    place: 'Calicut, Kerala',
    price: '₹ 75 Lakhs',
    description: '5 cents of prime land suitable for building your dream home in a gated community.',
    image: 'project-3',
    category: 'Plot',
  },
  {
    id: '4',
    title: 'Commercial Office Space',
    place: 'Infopark, Kochi',
    price: '₹ 1.5 Lakhs / month',
    description: 'A 2000 sq.ft. fully furnished office space ideal for startups and IT companies.',
    image: 'project-4',
    category: 'Commercial',
  },
  {
    id: '5',
    title: 'Luxury Beachfront Villa',
    place: 'Marari Beach, Alleppey',
    price: '₹ 3.5 Cr',
    description: 'Experience luxury living in this exquisite villa with direct beach access.',
    image: 'project-5',
    category: 'Buy',
  },
  {
    id: '6',
    title: 'Cozy Studio for Rent',
    place: 'Kakkanad, Kochi',
    price: '₹ 18,000 / month',
    description: 'A compact and modern studio apartment, perfect for students or bachelors.',
    image: 'project-6',
    category: 'Rent',
  },
  {
    id: '7',
    title: 'Agricultural Land',
    place: 'Palakkad, Kerala',
    price: '₹ 90 Lakhs',
    description: '2 acres of fertile land suitable for agriculture or as a long-term investment.',
    image: 'project-7',
    category: 'Plot',
  },
  {
    id: '8',
    title: 'Retail Showroom Space',
    place: 'MG Road, Kochi',
    price: 'Contact for price',
    description: 'High-visibility retail space on a busy commercial street, ready for fit-out.',
    image: 'project-8',
    category: 'Commercial',
  },
];
