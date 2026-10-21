// Comprehensive mock data service for SevaDaan backend
// Provides realistic fallback data when MongoDB is not connected or during offline development

export interface MockNGO {
  _id: string;
  id: string;
  name: string;
  description: string;
  mission: string;
  address: string;
  city: string;
  state: string;
  contactEmail: string;
  contactPhone: string;
  website: string;
  category: string;
  logo: string;
  bannerImage: string;
  status: string;
  totalDonations: number;
  donorCount: number;
  volunteerCount: number;
  programCount: number;
  beneficiariesServed: number;
  rating: number;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface MockProgram {
  _id: string;
  id: string;
  title: string;
  description: string;
  ngoId: string;
  ngoName: string;
  ngo: {
    _id: string;
    id: string;
    name: string;
    logo: string;
  };
  category: string;
  programType: string;
  startDate: string;
  endDate?: string;
  location: string;
  targetBeneficiaries: number;
  currentBeneficiaries: number;
  capacity?: number;
  currentParticipants?: number;
  goalAmount: number;
  targetAmount: number;
  raisedAmount: number;
  status: string;
  imageUrl: string;
  eligibilityCriteria?: string;
  volunteersNeeded?: number;
  volunteersRegistered?: number;
  createdAt: string;
  updatedAt: string;
}

export interface MockVolunteerOpportunity {
  _id: string;
  id: string;
  title: string;
  description: string;
  ngoId: string;
  ngoName: string;
  ngo: {
    _id: string;
    id: string;
    name: string;
    logo: string;
  };
  location: string;
  requiredHours: number;
  skills: string[];
  startDate: string;
  endDate?: string;
  status: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface MockTestimonial {
  _id: string;
  id: string;
  ngoId: string;
  authorName: string;
  authorRole: string;
  content: string;
  avatar: string;
  rating: number;
  createdAt: string;
}

export interface MockNotice {
  _id: string;
  id: string;
  ngoId: string;
  title: string;
  content: string;
  type: string;
  startDate?: string;
  endDate?: string;
  isHighlighted: boolean;
  createdAt: string;
}

export interface MockMedia {
  _id: string;
  id: string;
  ngoId: string;
  title: string;
  description: string;
  type: string;
  url: string;
  createdAt: string;
}

export interface MockDonation {
  _id: string;
  id: string;
  ngoId: string;
  ngoName: string;
  donorId: string;
  donorName: string;
  amount: number;
  currency: string;
  isAnonymous: boolean;
  message?: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

export interface MockGrant {
  _id: string;
  id: string;
  title: string;
  description: string;
  amount: number;
  deadline: string;
  eligibilityCriteria: string;
  provider: string;
  status: 'open' | 'closed' | 'reviewing';
  applicationLink?: string;
  createdAt: string;
  updatedAt: string;
}

// Generate base test data
const createMockNGOs = (): MockNGO[] => [
  {
    _id: "101",
    id: "101",
    name: "Helping Hands Foundation",
    description: "Dedicated to providing education and healthcare to underprivileged children in rural and urban communities.",
    mission: "To empower underprivileged children and youth through education, healthcare, and digital empowerment.",
    address: "123 Gandhi Road, Sector 15",
    city: "Mumbai",
    state: "Maharashtra",
    contactEmail: "contact@helpinghands.org",
    contactPhone: "+91 98765 43301",
    website: "https://helpinghands.org",
    category: "Education & Healthcare",
    logo: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&auto=format&fit=crop&q=80",
    bannerImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
    status: "verified",
    totalDonations: 2500000,
    donorCount: 850,
    volunteerCount: 120,
    programCount: 15,
    beneficiariesServed: 5000,
    rating: 4.8,
    socialLinks: {
      facebook: "https://facebook.com/helpinghands",
      twitter: "https://twitter.com/helpinghands",
      instagram: "https://instagram.com/helpinghands",
      linkedin: "https://linkedin.com/company/helpinghands"
    },
    createdAt: new Date("2023-01-15").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "102",
    id: "102",
    name: "Green Earth Initiative",
    description: "Environmental conservation focused on climate change mitigation, tree plantation, and clean water drives.",
    mission: "Creating sustainable environment through afforestation, clean energy, and conservation education.",
    address: "456 Tree Lane, Eco Park",
    city: "Bangalore",
    state: "Karnataka",
    contactEmail: "info@greenearth.org",
    contactPhone: "+91 98765 43302",
    website: "https://greenearth.org",
    category: "Environment",
    logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&auto=format&fit=crop&q=80",
    bannerImage: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1200&auto=format&fit=crop&q=80",
    status: "verified",
    totalDonations: 1800000,
    donorCount: 650,
    volunteerCount: 95,
    programCount: 12,
    beneficiariesServed: 3500,
    rating: 4.6,
    socialLinks: {
      facebook: "https://facebook.com/greenearth",
      twitter: "https://twitter.com/greenearth",
      instagram: "https://instagram.com/greenearth"
    },
    createdAt: new Date("2023-02-20").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "103",
    id: "103",
    name: "Women Empowerment Trust",
    description: "Empowering women and girls through skill development, entrepreneurship training, and legal literacy.",
    mission: "Economic and social empowerment of marginalized women through vocational training and self-reliance initiatives.",
    address: "789 Empowerment Street",
    city: "Delhi",
    state: "Delhi",
    contactEmail: "contact@womenempowerment.org",
    contactPhone: "+91 98765 43303",
    website: "https://womenempowerment.org",
    category: "Women Empowerment",
    logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
    bannerImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&auto=format&fit=crop&q=80",
    status: "verified",
    totalDonations: 1200000,
    donorCount: 450,
    volunteerCount: 80,
    programCount: 10,
    beneficiariesServed: 3000,
    rating: 4.7,
    socialLinks: {
      facebook: "https://facebook.com/womenempowerment",
      linkedin: "https://linkedin.com/company/womenempowerment"
    },
    createdAt: new Date("2023-03-10").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "mock-ngo-1",
    id: "mock-ngo-1",
    name: "Care Foundation",
    description: "Supporting community healthcare, clean drinking water, and welfare for rural families.",
    mission: "Make essential healthcare and education accessible to every underserved community.",
    address: "Community Center Road",
    city: "Mumbai",
    state: "Maharashtra",
    contactEmail: "hello@carefoundation.org",
    contactPhone: "+91 98765 43210",
    website: "https://carefoundation.org",
    category: "Healthcare",
    logo: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&auto=format&fit=crop&q=80",
    bannerImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
    status: "verified",
    totalDonations: 3100000,
    donorCount: 920,
    volunteerCount: 140,
    programCount: 8,
    beneficiariesServed: 6200,
    rating: 4.9,
    createdAt: new Date("2023-04-01").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "mock-ngo-2",
    id: "mock-ngo-2",
    name: "Hope Initiative",
    description: "Delivering nutritional food support, job skills, and emergency relief across urban centers.",
    mission: "Eradicate hunger and build resilient livelihood opportunities for marginalized youth.",
    address: "Hope Street, Connaught Place",
    city: "Delhi",
    state: "Delhi",
    contactEmail: "team@hopeinitiative.org",
    contactPhone: "+91 98765 43211",
    website: "https://hopeinitiative.org",
    category: "Community Development",
    logo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&auto=format&fit=crop&q=80",
    bannerImage: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1200&auto=format&fit=crop&q=80",
    status: "verified",
    totalDonations: 1950000,
    donorCount: 580,
    volunteerCount: 85,
    programCount: 6,
    beneficiariesServed: 4100,
    rating: 4.7,
    createdAt: new Date("2023-05-15").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "mock-ngo-3",
    id: "mock-ngo-3",
    name: "Green Horizon Trust",
    description: "Grassroots environmental protection, waste recycling, and solar awareness in rural belts.",
    mission: "Promote ecological balance through renewable community actions.",
    address: "Eco Park Road",
    city: "Bengaluru",
    state: "Karnataka",
    contactEmail: "contact@greenhorizon.org",
    contactPhone: "+91 98765 43212",
    website: "https://greenhorizon.org",
    category: "Environment",
    logo: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&auto=format&fit=crop&q=80",
    bannerImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=80",
    status: "verified",
    totalDonations: 1450000,
    donorCount: 410,
    volunteerCount: 70,
    programCount: 5,
    beneficiariesServed: 2800,
    rating: 4.6,
    createdAt: new Date("2023-06-01").toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const mockNGOs: MockNGO[] = createMockNGOs();

export const mockPrograms: MockProgram[] = [
  {
    _id: "prog_1",
    id: "prog_1",
    title: "Education for All - Rural Learning Labs",
    description: "Setting up smart digital classrooms and library resources in 25 village schools to bridge the digital education divide.",
    ngoId: "101",
    ngoName: "Helping Hands Foundation",
    ngo: {
      _id: "101",
      id: "101",
      name: "Helping Hands Foundation",
      logo: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&auto=format&fit=crop&q=80"
    },
    category: "Education",
    programType: "regular",
    startDate: "2024-01-01",
    endDate: "2025-12-31",
    location: "Mumbai, Maharashtra",
    targetBeneficiaries: 1200,
    currentBeneficiaries: 850,
    capacity: 100,
    currentParticipants: 85,
    goalAmount: 500000,
    targetAmount: 500000,
    raisedAmount: 375000,
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    eligibilityCriteria: "Open to underprivileged school students in grades 1 through 10.",
    volunteersNeeded: 25,
    volunteersRegistered: 18,
    createdAt: new Date("2024-01-01").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "prog_2",
    id: "prog_2",
    title: "Clean Water & Sanitation Initiative",
    description: "Installing solar-powered multi-stage water filtration units in drought-affected districts.",
    ngoId: "102",
    ngoName: "Green Earth Initiative",
    ngo: {
      _id: "102",
      id: "102",
      name: "Green Earth Initiative",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&auto=format&fit=crop&q=80"
    },
    category: "Environment",
    programType: "regular",
    startDate: "2024-02-15",
    endDate: "2025-11-30",
    location: "Bangalore, Karnataka",
    targetBeneficiaries: 2500,
    currentBeneficiaries: 1400,
    capacity: 200,
    currentParticipants: 160,
    goalAmount: 800000,
    targetAmount: 800000,
    raisedAmount: 520000,
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
    eligibilityCriteria: "Community members in rural zones with arsenic or hard water issues.",
    volunteersNeeded: 20,
    volunteersRegistered: 15,
    createdAt: new Date("2024-02-15").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "prog_3",
    id: "prog_3",
    title: "Women Vocational & Tailoring Centers",
    description: "Skill training in sewing, handicrafts, digital literacy, and financial planning for single mothers and rural women.",
    ngoId: "103",
    ngoName: "Women Empowerment Trust",
    ngo: {
      _id: "103",
      id: "103",
      name: "Women Empowerment Trust",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
    },
    category: "Women Empowerment",
    programType: "training",
    startDate: "2024-03-01",
    endDate: "2025-12-31",
    location: "Delhi, Delhi",
    targetBeneficiaries: 600,
    currentBeneficiaries: 420,
    capacity: 80,
    currentParticipants: 65,
    goalAmount: 400000,
    targetAmount: 400000,
    raisedAmount: 310000,
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80",
    eligibilityCriteria: "Women and girls seeking livelihood skills.",
    volunteersNeeded: 15,
    volunteersRegistered: 12,
    createdAt: new Date("2024-03-01").toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "prog_4",
    id: "prog_4",
    title: "Mobile Primary Healthcare Van",
    description: "Providing free doctor consultations, diagnostic tests, and basic medications to remote villages weekly.",
    ngoId: "mock-ngo-1",
    ngoName: "Care Foundation",
    ngo: {
      _id: "mock-ngo-1",
      id: "mock-ngo-1",
      name: "Care Foundation",
      logo: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&auto=format&fit=crop&q=80"
    },
    category: "Healthcare",
    programType: "regular",
    startDate: "2024-04-01",
    endDate: "2025-12-31",
    location: "Mumbai, Maharashtra",
    targetBeneficiaries: 3000,
    currentBeneficiaries: 1800,
    capacity: 150,
    currentParticipants: 120,
    goalAmount: 650000,
    targetAmount: 650000,
    raisedAmount: 480000,
    status: "ongoing",
    imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
    volunteersNeeded: 12,
    volunteersRegistered: 10,
    createdAt: new Date("2024-04-01").toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const mockVolunteerOpportunities: MockVolunteerOpportunity[] = [
  {
    _id: "vol_1",
    id: "vol_1",
    title: "Community Outreach & Teaching Volunteer",
    description: "Volunteer to assist primary school teachers with tutoring math, reading, and creative arts for rural children.",
    ngoId: "101",
    ngoName: "Helping Hands Foundation",
    ngo: {
      _id: "101",
      id: "101",
      name: "Helping Hands Foundation",
      logo: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&auto=format&fit=crop&q=80"
    },
    location: "Mumbai, Maharashtra",
    requiredHours: 4,
    skills: ["Teaching", "Communication", "English", "Patience"],
    startDate: "2024-04-01",
    endDate: "2025-12-31",
    status: "open",
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "vol_2",
    id: "vol_2",
    title: "Urban Tree Plantation & Cleanliness Leader",
    description: "Lead weekend tree planting and green neighborhood awareness drives in local parks and residential communities.",
    ngoId: "102",
    ngoName: "Green Earth Initiative",
    ngo: {
      _id: "102",
      id: "102",
      name: "Green Earth Initiative",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&auto=format&fit=crop&q=80"
    },
    location: "Bangalore, Karnataka",
    requiredHours: 5,
    skills: ["Teamwork", "Environment", "Physical Fitness"],
    startDate: "2024-05-01",
    endDate: "2025-11-30",
    status: "open",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "vol_3",
    id: "vol_3",
    title: "Digital Skills & Mentorship Volunteer",
    description: "Mentor young women in basic computer operations, online resumes, and job portal navigation.",
    ngoId: "103",
    ngoName: "Women Empowerment Trust",
    ngo: {
      _id: "103",
      id: "103",
      name: "Women Empowerment Trust",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
    },
    location: "Delhi, Delhi",
    requiredHours: 6,
    skills: ["Computers", "Mentorship", "Career Counseling"],
    startDate: "2024-06-01",
    endDate: "2025-10-31",
    status: "open",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const mockTestimonials: MockTestimonial[] = [
  {
    _id: "test_1",
    id: "test_1",
    ngoId: "101",
    authorName: "Ananya Deshmukh",
    authorRole: "Parent & Community Beneficiary",
    content: "Helping Hands Foundation helped my daughter access quality education and school supplies. We are eternally grateful for their kindness.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    createdAt: new Date().toISOString()
  },
  {
    _id: "test_2",
    id: "test_2",
    ngoId: "101",
    authorName: "Vikram Mehta",
    authorRole: "Volunteer Mentor",
    content: "Volunteering with this NGO has been one of the most rewarding experiences of my life. Seeing the children smile makes every hour count.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    createdAt: new Date().toISOString()
  },
  {
    _id: "test_3",
    id: "test_3",
    ngoId: "102",
    authorName: "Siddharth Rao",
    authorRole: "Community Partner",
    content: "Green Earth Initiative planted over 5,000 saplings in our neighborhood and set up clean water facilities that transformed our area.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
    rating: 5,
    createdAt: new Date().toISOString()
  }
];

export const mockNotices: MockNotice[] = [
  {
    _id: "not_1",
    id: "not_1",
    ngoId: "101",
    title: "Annual Free Health & Dental Camp",
    content: "Join us this weekend for comprehensive checkups conducted by specialist volunteer doctors from City Hospital.",
    type: "event",
    startDate: "2024-11-01",
    endDate: "2024-11-02",
    isHighlighted: true,
    createdAt: new Date().toISOString()
  },
  {
    _id: "not_2",
    id: "not_2",
    ngoId: "101",
    title: "Scholarship Applications Open for 2025",
    content: "Merit-cum-means scholarship applications are open for students from grades 6 through 12.",
    type: "announcement",
    startDate: "2024-10-15",
    isHighlighted: false,
    createdAt: new Date().toISOString()
  }
];

export const mockMedia: MockMedia[] = [
  {
    _id: "med_1",
    id: "med_1",
    ngoId: "101",
    title: "Community Outreach Drive",
    description: "Distributing books, uniforms, and learning kits to primary school children.",
    type: "image",
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
    createdAt: new Date().toISOString()
  },
  {
    _id: "med_2",
    id: "med_2",
    ngoId: "101",
    title: "Clean Water Project Launch",
    description: "Inauguration of water filtration unit providing pure drinking water.",
    type: "image",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=80",
    createdAt: new Date().toISOString()
  }
];

export const mockDonations: MockDonation[] = [
  {
    _id: "don_1",
    id: "don_1",
    ngoId: "101",
    ngoName: "Helping Hands Foundation",
    donorId: "user_4",
    donorName: "Amit Patel",
    amount: 5000,
    currency: "INR",
    isAnonymous: false,
    message: "Wishing great success to the children learning programs.",
    paymentMethod: "upi",
    status: "completed",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    _id: "don_2",
    id: "don_2",
    ngoId: "102",
    ngoName: "Green Earth Initiative",
    donorId: "user_5",
    donorName: "Sunita Singh",
    amount: 2500,
    currency: "INR",
    isAnonymous: true,
    message: "Supporting tree plantation drive.",
    paymentMethod: "card",
    status: "completed",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  }
];

export const mockGrants: MockGrant[] = [
  {
    _id: "grant_1",
    id: "grant_1",
    title: "Community Education Infrastructure Grant",
    description: "Financial assistance for grassroots NGOs building computer labs and libraries in underserved schools.",
    amount: 500000,
    deadline: "2025-06-30",
    eligibilityCriteria: "Registered NGOs operating for at least 2 years in education sector.",
    provider: "National Literacy Trust",
    status: "open",
    applicationLink: "https://example.org/apply-grant-1",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: "grant_2",
    id: "grant_2",
    title: "Clean Water and Sanitation Initiative Fund",
    description: "Funding for solar-powered water purifiers and community sanitation stations in drought-affected districts.",
    amount: 750000,
    deadline: "2025-08-15",
    eligibilityCriteria: "NGOs with active water/sanitation programs and local community partnership.",
    provider: "Green Future Foundation",
    status: "open",
    applicationLink: "https://example.org/apply-grant-2",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Helper methods for controller fallbacks
export const mockDataService = {
  getMockNGOs: (query: any) => {
    const page = parseInt(query?.page as string) || 1;
    const limit = parseInt(query?.limit as string) || 10;
    const search = (query?.search as string || '').toLowerCase();
    const category = query?.category as string;
    const city = (query?.city as string || '').toLowerCase();
    const state = (query?.state as string || '').toLowerCase();

    let filtered = mockNGOs;

    if (search) {
      filtered = filtered.filter(n =>
        n.name.toLowerCase().includes(search) ||
        n.description.toLowerCase().includes(search) ||
        (n.mission && n.mission.toLowerCase().includes(search))
      );
    }

    if (category) {
      filtered = filtered.filter(n => n.category === category);
    }

    if (city) {
      filtered = filtered.filter(n => n.city.toLowerCase() === city);
    }

    if (state) {
      filtered = filtered.filter(n => n.state.toLowerCase() === state);
    }

    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return {
      success: true,
      data: paginated,
      pagination: {
        total: filtered.length,
        totalItems: filtered.length,
        page,
        currentPage: page,
        limit,
        itemsPerPage: limit,
        pages: Math.ceil(filtered.length / limit),
        totalPages: Math.ceil(filtered.length / limit)
      },
      message: 'NGOs retrieved from local mock data service'
    };
  },

  getMockNGOById: (id: string) => {
    return mockNGOs.find(n => n.id === id || n._id === id) || null;
  },

  getMockPrograms: (query: any) => {
    const page = parseInt(query?.page as string) || 1;
    const limit = parseInt(query?.limit as string) || 12;
    const ngoId = query?.ngoId as string || query?.ngo as string;
    const category = query?.category as string;
    const status = query?.status as string;
    const search = (query?.search as string || '').toLowerCase();

    let filtered = mockPrograms;

    if (ngoId) {
      filtered = filtered.filter(p => p.ngoId === ngoId || p.ngo?._id === ngoId || p.ngo?.id === ngoId);
    }

    if (category) {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    if (status && status !== 'all') {
      filtered = filtered.filter(p => p.status === status);
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
      );
    }

    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return {
      success: true,
      data: paginated,
      pagination: {
        total: filtered.length,
        totalItems: filtered.length,
        page,
        currentPage: page,
        limit,
        itemsPerPage: limit,
        pages: Math.ceil(filtered.length / limit),
        totalPages: Math.ceil(filtered.length / limit)
      },
      message: 'Programs retrieved from local mock data service'
    };
  },

  getMockProgramById: (id: string) => {
    return mockPrograms.find(p => p.id === id || p._id === id) || null;
  },

  getMockVolunteerOpportunities: (query: any) => {
    const limit = query?.limit ? parseInt(query.limit as string) : undefined;
    const ngoId = query?.ngoId as string || query?.ngo as string;
    const location = (query?.location as string || '').toLowerCase();
    const status = query?.status as string;

    let filtered = mockVolunteerOpportunities;

    if (ngoId) {
      filtered = filtered.filter(v => v.ngoId === ngoId || v.ngo?._id === ngoId);
    }

    if (location) {
      filtered = filtered.filter(v => v.location.toLowerCase().includes(location));
    }

    if (status && status !== 'all') {
      filtered = filtered.filter(v => v.status === status);
    }

    if (limit && !isNaN(limit)) {
      filtered = filtered.slice(0, limit);
    }

    return {
      success: true,
      data: filtered,
      message: 'Volunteer opportunities retrieved from local mock data service'
    };
  },

  getMockVolunteerById: (id: string) => {
    return mockVolunteerOpportunities.find(v => v.id === id || v._id === id) || null;
  },

  getMockTestimonials: (query: any) => {
    const ngoId = query?.ngoId as string || query?.ngo as string;
    let filtered = mockTestimonials;
    if (ngoId) {
      filtered = filtered.filter(t => t.ngoId === ngoId);
    }
    return {
      success: true,
      data: filtered,
      message: 'Testimonials retrieved from local mock data service'
    };
  },

  getMockNotices: (query: any) => {
    const ngoId = query?.ngoId as string;
    let filtered = mockNotices;
    if (ngoId) {
      filtered = filtered.filter(n => n.ngoId === ngoId);
    }
    return {
      success: true,
      data: filtered,
      message: 'Notices retrieved from local mock data service'
    };
  },

  getMockMedia: (query: any) => {
    const ngoId = query?.ngoId as string;
    let filtered = mockMedia;
    if (ngoId) {
      filtered = filtered.filter(m => m.ngoId === ngoId);
    }
    return {
      success: true,
      data: filtered,
      message: 'Media retrieved from local mock data service'
    };
  },

  getMockDonations: (_query: any) => {
    return {
      success: true,
      data: mockDonations,
      message: 'Donations retrieved from local mock data service'
    };
  },

  getMockDonationById: (id: string) => {
    return mockDonations.find(d => d.id === id || d._id === id) || null;
  },

  getMockGrants: (_query: any) => {
    return {
      success: true,
      data: mockGrants,
      message: 'Grants retrieved from local mock data service'
    };
  },

  getMockGrantById: (id: string) => {
    return mockGrants.find(g => g.id === id || g._id === id) || null;
  }
};

export default mockDataService;
