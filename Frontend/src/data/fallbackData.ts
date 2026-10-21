import { NGO, Program } from '../types';

export const fallbackNGOs: NGO[] = [
  {
    id: '101',
    name: 'Helping Hands Foundation',
    logo: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&auto=format&fit=crop&q=80',
    description: 'Dedicated to providing education and healthcare to underprivileged children in rural and urban communities.',
    mission: 'To empower underprivileged children and youth through education, healthcare, and digital empowerment.',
    address: '123 Gandhi Road, Sector 15',
    city: 'Mumbai',
    state: 'Maharashtra',
    contactEmail: 'contact@helpinghands.org',
    contactPhone: '+91 98765 43301',
    website: 'https://helpinghands.org',
    createdAt: '2023-01-15T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '102',
    name: 'Green Earth Initiative',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&auto=format&fit=crop&q=80',
    description: 'Environmental conservation focused on climate change mitigation, tree plantation, and clean water drives.',
    mission: 'Creating sustainable environment through afforestation, clean energy, and conservation education.',
    address: '456 Tree Lane, Eco Park',
    city: 'Bangalore',
    state: 'Karnataka',
    contactEmail: 'info@greenearth.org',
    contactPhone: '+91 98765 43302',
    website: 'https://greenearth.org',
    createdAt: '2023-02-20T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: '103',
    name: 'Women Empowerment Trust',
    logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    description: 'Empowering women and girls through skill development, entrepreneurship training, and legal literacy.',
    mission: 'Economic and social empowerment of marginalized women through vocational training and self-reliance initiatives.',
    address: '789 Empowerment Street',
    city: 'Delhi',
    state: 'Delhi',
    contactEmail: 'contact@womenempowerment.org',
    contactPhone: '+91 98765 43303',
    website: 'https://womenempowerment.org',
    createdAt: '2023-03-10T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'mock-ngo-1',
    name: 'Care Foundation',
    logo: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&auto=format&fit=crop&q=80',
    description: 'Supporting community healthcare, clean drinking water, and welfare for rural families.',
    mission: 'Make essential healthcare and education accessible to every underserved community.',
    address: 'Community Center Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    contactEmail: 'hello@carefoundation.org',
    contactPhone: '+91 98765 43210',
    website: 'https://carefoundation.org',
    createdAt: '2023-04-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  }
];

export const fallbackPrograms: Program[] = [
  {
    id: 'prog_1',
    title: 'Education for All - Rural Learning Labs',
    description: 'Setting up smart digital classrooms and library resources in 25 village schools to bridge the digital education divide.',
    ngoId: '101',
    location: 'Mumbai, Maharashtra',
    status: 'ongoing',
    eligibilityCriteria: 'Open to underprivileged school students in grades 1 through 10.',
    capacity: 100,
    currentParticipants: 85,
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
    startDate: '2024-01-01',
    endDate: '2025-12-31',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    id: 'prog_2',
    title: 'Clean Water & Sanitation Initiative',
    description: 'Installing solar-powered multi-stage water filtration units in drought-affected districts.',
    ngoId: '102',
    location: 'Bangalore, Karnataka',
    status: 'ongoing',
    eligibilityCriteria: 'Community members in rural zones with water quality issues.',
    capacity: 200,
    currentParticipants: 160,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    startDate: '2024-02-15',
    endDate: '2025-11-30',
    createdAt: '2024-02-15T00:00:00.000Z',
    updatedAt: '2024-02-15T00:00:00.000Z'
  },
  {
    id: 'prog_3',
    title: 'Women Vocational & Tailoring Centers',
    description: 'Skill training in sewing, handicrafts, digital literacy, and financial planning for single mothers and rural women.',
    ngoId: '103',
    location: 'Delhi, Delhi',
    status: 'ongoing',
    eligibilityCriteria: 'Women and girls seeking livelihood skills.',
    capacity: 80,
    currentParticipants: 65,
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80',
    startDate: '2024-03-01',
    endDate: '2025-12-31',
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-03-01T00:00:00.000Z'
  },
  {
    id: 'prog_4',
    title: 'Mobile Primary Healthcare Van',
    description: 'Providing free doctor consultations, diagnostic tests, and basic medications to remote villages weekly.',
    ngoId: 'mock-ngo-1',
    location: 'Mumbai, Maharashtra',
    status: 'ongoing',
    eligibilityCriteria: 'Rural community residents in underserved villages.',
    capacity: 150,
    currentParticipants: 120,
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
    startDate: '2024-04-01',
    endDate: '2025-12-31',
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2024-04-01T00:00:00.000Z'
  }
];

export const fallbackVolunteerOpportunities = [
  {
    id: 'vol_1',
    title: 'Community Outreach & Teaching Volunteer',
    description: 'Volunteer to assist primary school teachers with tutoring math, reading, and creative arts for rural children.',
    ngoId: '101',
    location: 'Mumbai, Maharashtra',
    requiredHours: 4,
    skills: ['Teaching', 'Communication', 'English', 'Patience'],
    startDate: '2024-04-01',
    endDate: '2025-12-31',
    status: 'open' as const,
    imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80',
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2024-04-01T00:00:00.000Z'
  },
  {
    id: 'vol_2',
    title: 'Urban Tree Plantation & Cleanliness Leader',
    description: 'Lead weekend tree planting and green neighborhood awareness drives in local parks and residential communities.',
    ngoId: '102',
    location: 'Bangalore, Karnataka',
    requiredHours: 6,
    skills: ['Leadership', 'Event Management', 'Environment', 'Teamwork'],
    startDate: '2024-05-01',
    endDate: '2025-10-31',
    status: 'open' as const,
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2024-05-01T00:00:00.000Z'
  },
  {
    id: 'vol_3',
    title: 'Digital Skills & Vocational Mentor',
    description: 'Teach basic computer navigation, typing, and online commerce to young women at local skill development centers.',
    ngoId: '103',
    location: 'Delhi, Delhi',
    requiredHours: 5,
    skills: ['Computers', 'Mentoring', 'Digital Literacy', 'Patience'],
    startDate: '2024-06-01',
    endDate: '2025-12-31',
    status: 'open' as const,
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2024-06-01T00:00:00.000Z'
  }
];
