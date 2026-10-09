// Simple test data server endpoints for SevaDaan platform
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// Import test data (simplified version for simple server)
const generateTestData = () => {
  const testUsers = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@sevadaan.com",
      role: "system_admin",
      phone: "9876543210",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "2", 
      name: "Rajesh Kumar",
      email: "rajesh.ngo@sevadaan.com",
      role: "ngo_admin",
      phone: "9876543211",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "3",
      name: "Priya Sharma", 
      email: "priya.volunteer@sevadaan.com",
      role: "volunteer",
      phone: "9876543212",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "4",
      name: "Amit Patel",
      email: "amit.donor@sevadaan.com", 
      role: "donor",
      phone: "9876543213",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "5",
      name: "Sunita Singh",
      email: "sunita.citizen@sevadaan.com",
      role: "citizen", 
      phone: "9876543214",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80"
    }
  ];

  const testNGOs = [
    {
      id: "101",
      name: "Helping Hands Foundation",
      description: "Dedicated to providing education and healthcare to underprivileged children in rural and urban communities.",
      mission: "To empower underprivileged children and youth through education, healthcare, and digital empowerment.",
      address: "123 Gandhi Road, Sector 15",
      city: "Mumbai",
      state: "Maharashtra",
      contactEmail: "contact@helpinghands.org",
      contactPhone: "9876543301",
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
      }
    },
    {
      id: "102", 
      name: "Green Earth Initiative",
      description: "Environmental conservation focused on climate change mitigation, tree plantation, and clean water drives.",
      mission: "Creating sustainable environment through afforestation, clean energy, and conservation education.",
      address: "456 Tree Lane, Eco Park",
      city: "Bangalore",
      state: "Karnataka", 
      contactEmail: "info@greenearth.org",
      contactPhone: "9876543302",
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
      }
    },
    {
      id: "103",
      name: "Women Empowerment Trust", 
      description: "Empowering women and girls through skill development, entrepreneurship training, and legal literacy.",
      mission: "Economic and social empowerment of marginalized women through vocational training and self-reliance initiatives.",
      address: "789 Empowerment Street",
      city: "Delhi",
      state: "Delhi",
      contactEmail: "contact@womenempowerment.org", 
      contactPhone: "9876543303",
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
      }
    }
  ];

  // Generate 17 more NGOs
  const categories = [
    "Healthcare", "Education", "Child Welfare", "Elder Care", "Animal Welfare",
    "Disaster Relief", "Skill Development", "Rural Development", "Mental Health",
    "Technology", "Arts & Culture", "Sports", "Food Security", "Water Conservation",
    "Urban Development", "Community Development", "Human Rights"
  ];

  const cities = [
    { city: "Chennai", state: "Tamil Nadu" },
    { city: "Kolkata", state: "West Bengal" },
    { city: "Hyderabad", state: "Telangana" },
    { city: "Pune", state: "Maharashtra" },
    { city: "Ahmedabad", state: "Gujarat" },
    { city: "Jaipur", state: "Rajasthan" },
    { city: "Lucknow", state: "Uttar Pradesh" },
    { city: "Bhopal", state: "Madhya Pradesh" },
    { city: "Patna", state: "Bihar" },
    { city: "Thiruvananthapuram", state: "Kerala" },
    { city: "Guwahati", state: "Assam" },
    { city: "Chandigarh", state: "Punjab" },
    { city: "Raipur", state: "Chhattisgarh" },
    { city: "Bhubaneswar", state: "Odisha" },
    { city: "Panaji", state: "Goa" },
    { city: "Dehradun", state: "Uttarakhand" },
    { city: "Ranchi", state: "Jharkhand" }
  ];

  const ngoLogos = [
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&auto=format&fit=crop&q=80"
  ];

  for (let i = 4; i <= 20; i++) {
    const category = categories[i - 4];
    const location = cities[i - 4];
    const orgNames = [
      "Foundation", "Trust", "Society", "Organization", "Initiative", 
      "Center", "Association", "Group", "Alliance", "Collective"
    ];
    const orgType = orgNames[Math.floor(Math.random() * orgNames.length)];
    const logoUrl = ngoLogos[(i - 4) % ngoLogos.length];
    
    testNGOs.push({
      id: (100 + i).toString(),
      name: `${category} ${orgType}`,
      description: `Leading organization working in ${category.toLowerCase()} to create sustainable positive social impact across communities.`,
      mission: `Transforming communities through innovative ${category.toLowerCase()} programs and volunteer participation.`,
      address: `${Math.floor(Math.random() * 999) + 100} ${category} Street`,
      city: location.city,
      state: location.state,
      contactEmail: `contact@${category.toLowerCase().replace(/\s+/g, '')}${orgType.toLowerCase()}.org`,
      contactPhone: `987654${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      website: `https://${category.toLowerCase().replace(/\s+/g, '')}${orgType.toLowerCase()}.org`,
      category: category,
      logo: logoUrl,
      bannerImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
      status: Math.random() > 0.1 ? "verified" : "under_review",
      totalDonations: Math.floor(Math.random() * 3000000) + 200000,
      donorCount: Math.floor(Math.random() * 800) + 100,
      volunteerCount: Math.floor(Math.random() * 150) + 30,
      programCount: Math.floor(Math.random() * 20) + 5,
      beneficiariesServed: Math.floor(Math.random() * 8000) + 1000,
      rating: parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)),
      socialLinks: {
        facebook: `https://facebook.com/${category.toLowerCase().replace(/\s+/g, '')}`,
        twitter: `https://twitter.com/${category.toLowerCase().replace(/\s+/g, '')}`
      }
    });
  }

  const programImages = [
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80"
  ];

  const testPrograms = [];
  testNGOs.forEach((ngo, index) => {
    const programCount = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i < programCount; i++) {
      const progId = `${ngo.id}_${i + 1}`;
      const img = programImages[(index * 3 + i) % programImages.length];
      testPrograms.push({
        id: progId,
        title: `${ngo.category} Program: ${i === 0 ? 'Community Outreach' : i === 1 ? 'Youth Empowerment' : 'Support Initiative'}`,
        description: `Comprehensive ${ngo.category.toLowerCase()} initiative by ${ngo.name} providing essential care, training, resources, and grassroots development to local communities.`,
        ngoId: ngo.id,
        ngoName: ngo.name,
        ngo: {
          id: ngo.id,
          _id: ngo.id,
          name: ngo.name,
          logo: ngo.logo
        },
        category: ngo.category,
        programType: ["regular", "event", "training", "workshop", "awareness"][i % 5],
        startDate: "2024-03-01",
        endDate: "2025-12-31",
        location: `${ngo.city}, ${ngo.state}`,
        targetBeneficiaries: Math.floor(Math.random() * 500) + 100,
        currentBeneficiaries: Math.floor(Math.random() * 300) + 50,
        capacity: 100,
        currentParticipants: Math.floor(Math.random() * 70) + 20,
        goalAmount: Math.floor(Math.random() * 1000000) + 200000,
        targetAmount: Math.floor(Math.random() * 1000000) + 200000,
        raisedAmount: Math.floor(Math.random() * 400000) + 50000,
        status: i === 0 ? "ongoing" : i === 1 ? "upcoming" : "completed",
        imageUrl: img,
        eligibilityCriteria: "Open to community members, students, and families in need.",
        createdAt: new Date().toISOString()
      });
    }
  });

  const testVolunteerOpportunities = [];
  const volunteerImages = [
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&auto=format&fit=crop&q=80"
  ];

  testNGOs.slice(0, 10).forEach((ngo, index) => {
    testVolunteerOpportunities.push({
      id: `vol_${ngo.id}_1`,
      title: `Field Volunteer - ${ngo.category} Support`,
      description: `Join ${ngo.name} as a field volunteer to deliver workshops, distribute resources, and guide community beneficiaries.`,
      ngoId: ngo.id,
      ngoName: ngo.name,
      ngo: {
        id: ngo.id,
        _id: ngo.id,
        name: ngo.name,
        logo: ngo.logo
      },
      location: `${ngo.city}, ${ngo.state}`,
      requiredHours: 4,
      skills: ["Communication", "Community Outreach", "Organization"],
      startDate: "2024-04-01",
      endDate: "2025-12-31",
      status: "open",
      imageUrl: volunteerImages[index % volunteerImages.length],
      createdAt: new Date().toISOString()
    });

    testVolunteerOpportunities.push({
      id: `vol_${ngo.id}_2`,
      title: `Digital & Mentorship Coordinator`,
      description: `Mentor youth and assist ${ngo.name} with digital education sessions, communication, and event logistics.`,
      ngoId: ngo.id,
      ngoName: ngo.name,
      ngo: {
        id: ngo.id,
        _id: ngo.id,
        name: ngo.name,
        logo: ngo.logo
      },
      location: `${ngo.city}, ${ngo.state}`,
      requiredHours: 6,
      skills: ["Teaching", "Digital Literacy", "Mentorship"],
      startDate: "2024-05-15",
      endDate: "2025-10-30",
      status: "open",
      imageUrl: volunteerImages[(index + 1) % volunteerImages.length],
      createdAt: new Date().toISOString()
    });
  });

  const testEvents = [
    {
      id: "1",
      title: "Annual Charity Gala 2024",
      description: "Fundraising gala event to support educational scholarships for underprivileged youth.",
      ngoId: "101",
      ngoName: "Helping Hands Foundation",
      category: "Education & Healthcare",
      startDate: "2024-12-15T18:00:00Z",
      endDate: "2024-12-15T22:00:00Z",
      location: "Taj Mahal Palace, Mumbai",
      attendees: 250,
      status: "upcoming"
    }
  ];

  const testDonations = [];
  for (let i = 0; i < 50; i++) {
    const ngo = testNGOs[i % testNGOs.length];
    const donor = testUsers[3];
    const date = new Date();
    date.setDate(date.getDate() - (i * 2));
    
    testDonations.push({
      id: (i + 1).toString(),
      ngoId: ngo.id,
      ngoName: ngo.name,
      donorId: donor.id,
      donorName: Math.random() > 0.3 ? donor.name : "Anonymous Donor",
      amount: [500, 1000, 2500, 5000, 10000][i % 5],
      currency: "INR",
      isAnonymous: Math.random() > 0.7,
      message: "Dedicated to helping those in need.",
      paymentMethod: "upi",
      status: "completed",
      createdAt: date.toISOString()
    });
  }

  const testTestimonials = [
    {
      id: "test_1",
      ngoId: "101",
      authorName: "Ananya Deshmukh",
      authorRole: "Parent & Beneficiary",
      content: "Helping Hands Foundation helped my daughter access quality education and school supplies. We are eternally grateful for their kindness.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      createdAt: new Date().toISOString()
    },
    {
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
      id: "test_3",
      ngoId: "102",
      authorName: "Siddharth Rao",
      authorRole: "Community Partner",
      content: "Green Earth Initiative planted over 5,000 saplings in our neighborhood and set up clean water facilities that changed lives.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
      rating: 5,
      createdAt: new Date().toISOString()
    }
  ];

  const testNotices = [
    {
      id: "not_1",
      ngoId: "101",
      title: "Annual Free Health Checkup Camp",
      content: "Join us this Sunday for free dental, optical, and general health screenings conducted by volunteer doctors.",
      type: "event",
      startDate: "2024-11-01",
      endDate: "2024-11-02",
      isHighlighted: true,
      createdAt: new Date().toISOString()
    },
    {
      id: "not_2",
      ngoId: "101",
      title: "Scholarship Applications Now Open",
      content: "Students from grades 6 through 12 can now submit applications for merit-cum-means educational assistance.",
      type: "announcement",
      startDate: "2024-10-15",
      isHighlighted: false,
      createdAt: new Date().toISOString()
    }
  ];

  const testMedia = [
    {
      id: "med_1",
      ngoId: "101",
      title: "Community Outreach Drive",
      description: "Distributing books, uniforms, and learning kits to primary school children.",
      type: "image",
      url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
      createdAt: new Date().toISOString()
    },
    {
      id: "med_2",
      ngoId: "101",
      title: "Clean Water Project Launch",
      description: "Inauguration of water filtration unit providing pure drinking water.",
      type: "image",
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=80",
      createdAt: new Date().toISOString()
    }
  ];

  return { 
    testUsers, 
    testNGOs, 
    testPrograms, 
    testVolunteerOpportunities, 
    testEvents, 
    testDonations, 
    testTestimonials, 
    testNotices, 
    testMedia 
  };
};

const data = generateTestData();

// Create an express Router that handles all API routes
const apiRouter = express.Router();

// Health Check
apiRouter.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    success: true,
    message: 'SevaDaan Test API Server is running properly!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

apiRouter.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'SevaDaan API v1 is operational',
    version: '1.0.0'
  });
});

// NGOs Endpoints
apiRouter.get('/ngos', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || '';
  const category = req.query.category || '';
  const status = req.query.status || '';
  const city = req.query.city || '';
  const state = req.query.state || '';
  
  let filteredNGOs = data.testNGOs;
  
  if (search) {
    const s = search.toLowerCase();
    filteredNGOs = filteredNGOs.filter(ngo => 
      ngo.name.toLowerCase().includes(s) ||
      ngo.description.toLowerCase().includes(s) ||
      (ngo.mission && ngo.mission.toLowerCase().includes(s))
    );
  }
  
  if (category) {
    filteredNGOs = filteredNGOs.filter(ngo => ngo.category === category);
  }
  
  if (status) {
    filteredNGOs = filteredNGOs.filter(ngo => ngo.status === status);
  }

  if (city) {
    filteredNGOs = filteredNGOs.filter(ngo => ngo.city.toLowerCase() === city.toLowerCase());
  }

  if (state) {
    filteredNGOs = filteredNGOs.filter(ngo => ngo.state.toLowerCase() === state.toLowerCase());
  }
  
  const startIndex = (page - 1) * limit;
  const paginatedNGOs = filteredNGOs.slice(startIndex, startIndex + limit);
  
  res.json({
    success: true,
    data: paginatedNGOs,
    pagination: {
      currentPage: page,
      itemsPerPage: limit,
      totalItems: filteredNGOs.length,
      totalPages: Math.ceil(filteredNGOs.length / limit)
    }
  });
});

apiRouter.get('/ngos/:id', (req, res) => {
  const ngo = data.testNGOs.find(n => n.id === req.params.id || n._id === req.params.id);
  if (!ngo) {
    return res.status(404).json({ success: false, message: 'NGO not found' });
  }
  
  const ngoPrograms = data.testPrograms.filter(p => p.ngoId === ngo.id);
  const ngoTestimonials = data.testTestimonials.filter(t => t.ngoId === ngo.id);
  const ngoNotices = data.testNotices.filter(n => n.ngoId === ngo.id);
  const ngoMedia = data.testMedia.filter(m => m.ngoId === ngo.id);
  
  res.json({
    success: true,
    data: {
      ...ngo,
      programs: ngoPrograms,
      testimonials: ngoTestimonials,
      notices: ngoNotices,
      mediaItems: ngoMedia
    }
  });
});

// Programs Endpoints
apiRouter.get('/programs', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const ngoId = req.query.ngoId;
  const category = req.query.category;
  const status = req.query.status;
  const search = req.query.search;
  
  let filteredPrograms = data.testPrograms;
  
  if (ngoId) {
    filteredPrograms = filteredPrograms.filter(p => p.ngoId === ngoId);
  }
  
  if (category) {
    filteredPrograms = filteredPrograms.filter(p => p.category === category);
  }
  
  if (status && status !== 'all') {
    filteredPrograms = filteredPrograms.filter(p => p.status === status);
  }

  if (search) {
    const s = search.toLowerCase();
    filteredPrograms = filteredPrograms.filter(p => 
      p.title.toLowerCase().includes(s) || 
      p.description.toLowerCase().includes(s)
    );
  }
  
  const startIndex = (page - 1) * limit;
  const paginatedPrograms = filteredPrograms.slice(startIndex, startIndex + limit);
  
  res.json({
    success: true,
    data: paginatedPrograms,
    pagination: {
      currentPage: page,
      itemsPerPage: limit,
      totalItems: filteredPrograms.length,
      totalPages: Math.ceil(filteredPrograms.length / limit)
    }
  });
});

apiRouter.get('/programs/:id', (req, res) => {
  const program = data.testPrograms.find(p => p.id === req.params.id || p._id === req.params.id);
  if (!program) {
    return res.status(404).json({ success: false, message: 'Program not found' });
  }

  const ngo = data.testNGOs.find(n => n.id === program.ngoId) || {
    id: program.ngoId,
    name: program.ngoName || 'NGO Partner',
    logo: ''
  };

  res.json({
    success: true,
    data: {
      ...program,
      _id: program.id,
      ngo: {
        _id: ngo.id,
        id: ngo.id,
        name: ngo.name,
        logo: ngo.logo
      }
    }
  });
});

// Volunteer Opportunities Endpoints
apiRouter.get('/volunteer-opportunities', (req, res) => {
  const ngoId = req.query.ngoId;
  const location = req.query.location;
  const status = req.query.status;
  
  let filtered = data.testVolunteerOpportunities;
  
  if (ngoId) {
    filtered = filtered.filter(v => v.ngoId === ngoId);
  }

  if (status && status !== 'all') {
    filtered = filtered.filter(v => v.status === status);
  }

  if (location) {
    filtered = filtered.filter(v => v.location.toLowerCase().includes(location.toLowerCase()));
  }

  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  if (limit && !isNaN(limit)) {
    filtered = filtered.slice(0, limit);
  }

  res.json({
    success: true,
    data: filtered
  });
});

apiRouter.get('/volunteer-opportunities/opportunities', (req, res) => {
  res.json({
    success: true,
    data: data.testVolunteerOpportunities
  });
});

apiRouter.get('/volunteer-opportunities/:id', (req, res) => {
  const opp = data.testVolunteerOpportunities.find(v => v.id === req.params.id);
  if (!opp) {
    return res.status(404).json({ success: false, message: 'Volunteer opportunity not found' });
  }
  res.json({
    success: true,
    data: opp
  });
});

apiRouter.post(['/volunteer-opportunities/:id/apply', '/volunteer-opportunities/apply/:id', '/volunteers/apply'], (req, res) => {
  res.json({
    success: true,
    id: 'app_' + Date.now(),
    status: 'submitted',
    message: 'Volunteer application submitted successfully!'
  });
});

// Testimonials Endpoints
apiRouter.get('/testimonials', (req, res) => {
  const ngoId = req.query.ngoId;
  let result = data.testTestimonials;
  if (ngoId) {
    result = result.filter(t => t.ngoId === ngoId);
  }
  res.json({
    success: true,
    data: result
  });
});

apiRouter.post('/testimonials', (req, res) => {
  res.json({
    success: true,
    message: 'Testimonial submitted successfully!'
  });
});

// Notices Endpoints
apiRouter.get('/notices', (req, res) => {
  const ngoId = req.query.ngoId;
  let result = data.testNotices;
  if (ngoId) {
    result = result.filter(n => n.ngoId === ngoId);
  }
  res.json({
    success: true,
    data: result
  });
});

// Media Endpoints
apiRouter.get('/media', (req, res) => {
  const ngoId = req.query.ngoId;
  let result = data.testMedia;
  if (ngoId) {
    result = result.filter(m => m.ngoId === ngoId);
  }
  res.json({
    success: true,
    data: result
  });
});

// Donations Endpoints
apiRouter.get('/donations', (req, res) => {
  res.json({
    success: true,
    data: data.testDonations
  });
});

apiRouter.get('/donations/history', (req, res) => {
  res.json({
    success: true,
    data: data.testDonations.slice(0, 20)
  });
});

apiRouter.post('/donations', (req, res) => {
  const donation = {
    id: 'don_' + Date.now(),
    status: 'completed',
    amount: req.body.amount || 1000,
    currency: req.body.currency || 'INR',
    message: 'Donation processed successfully'
  };
  res.json({
    success: true,
    data: donation,
    message: 'Donation received! Thank you for your support.'
  });
});

// Auth endpoints
apiRouter.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = data.testUsers.find(u => u.email === email) || data.testUsers[0];
  res.json({
    success: true,
    data: {
      user,
      token: 'jwt_' + Date.now(),
      refreshToken: 'refresh_' + Date.now()
    },
    message: 'Login successful'
  });
});

apiRouter.post('/auth/register', (req, res) => {
  res.json({
    success: true,
    data: {
      user: {
        id: 'user_' + Date.now(),
        name: req.body.name,
        email: req.body.email,
        role: req.body.role || 'donor'
      },
      token: 'jwt_' + Date.now(),
      refreshToken: 'refresh_' + Date.now()
    },
    message: 'Registration successful'
  });
});

// Categories & Stats
apiRouter.get('/categories', (req, res) => {
  res.json({
    success: true,
    data: [...new Set(data.testNGOs.map(n => n.category))]
  });
});

apiRouter.get('/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      totalNGOs: data.testNGOs.length,
      totalPrograms: data.testPrograms.length,
      totalVolunteers: data.testVolunteerOpportunities.length,
      totalDonations: data.testDonations.reduce((sum, d) => sum + d.amount, 0)
    }
  });
});

// Mount the apiRouter on both /api and /api/v1!
app.use('/api/v1', apiRouter);
app.use('/api', apiRouter);

// Top-level health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Start server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 SevaDaan Test API Server running on http://localhost:${PORT}`);
    console.log(`📡 Endpoints supported under BOTH /api and /api/v1:`);
    console.log(`   • NGOs: http://localhost:${PORT}/api/v1/ngos`);
    console.log(`   • Programs: http://localhost:${PORT}/api/v1/programs`);
    console.log(`   • Volunteers: http://localhost:${PORT}/api/v1/volunteer-opportunities`);
    console.log(`   • Testimonials: http://localhost:${PORT}/api/v1/testimonials`);
    console.log(`   • Notices: http://localhost:${PORT}/api/v1/notices`);
    console.log(`   • Media: http://localhost:${PORT}/api/v1/media`);
    console.log(`   • Donations: http://localhost:${PORT}/api/v1/donations`);
  });
}

module.exports = app;
