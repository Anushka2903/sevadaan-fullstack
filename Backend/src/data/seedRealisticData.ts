import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import NGO from '../models/NGO';
import Program from '../models/Program';
import Volunteer from '../models/Volunteer';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://anushkajain2903_db_user:nush29032003@cluster0.lxludlv.mongodb.net/sevadaan?retryWrites=true&w=majority';

export const realisticNGOs = [
  {
    name: 'Smile Foundation India',
    description: 'Smile Foundation is a national development organization directly benefitting over 1.5 million children and families every year through more than 400 welfare projects on education, healthcare, livelihood, and women empowerment across 2,000 remote villages and slums in 25 states of India.',
    mission: 'To empower underprivileged children, youth, and women through relevant education, innovative healthcare, and market-focused livelihood programs.',
    vision: 'Work as a catalyst of change in the lives of underprivileged children, youth, and women, with a life-cycle approach of development.',
    address: '161 B/4, 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110049',
    contactEmail: 'info@smilefoundationindia.org',
    contactPhone: '9810123456',
    website: 'https://www.smilefoundationindia.org',
    logo: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Charitable Trust',
    operationalAreas: ['Education', 'Healthcare', 'Women Empowerment', 'Livelihood'],
    targetBeneficiaries: 'Underprivileged children, adolescent girls, and low-income families',
    impactMetrics: 'Over 1.5 million children and families directly impacted across 25 states',
    registrationNumber: 'REG-DEL-2002-8841',
    registrationDate: new Date('2002-04-12'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 4500000,
    donorCount: 1250,
    volunteerCount: 340,
    programCount: 18,
    beneficiariesServed: 150000,
    bankDetails: {
      accountName: 'Smile Foundation India',
      bankName: 'State Bank of India',
      accountNumber: '302948571029',
      ifscCode: 'SBIN0001024'
    },
    representative: {
      name: 'Santanu Mishra',
      designation: 'Co-Founder & Executive Trustee',
      phone: '9810123456',
      email: 'santanu@smilefoundationindia.org',
      idType: 'pan' as const,
      idNumber: 'ABCPS1234F'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'The Akshaya Patra Foundation',
    description: 'The Akshaya Patra Foundation is an Indian NGO striving to eliminate classroom hunger by implementing the Mid-Day Meal Scheme in government and government-aided schools. Serving wholesome food to over 2 million children across India every single school day.',
    mission: 'To ensure no child in India shall be deprived of education because of hunger.',
    vision: 'By 2030, feeding 5 million children every day across underprivileged regions of India.',
    address: 'Hare Krishna Hill, West of Chord Road, Rajajinagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560010',
    contactEmail: 'infodesk@akshayapatra.org',
    contactPhone: '9845012345',
    website: 'https://www.akshayapatra.org',
    logo: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Charitable Trust',
    operationalAreas: ['Nutrition', 'Education', 'Child Welfare', 'Disaster Relief'],
    targetBeneficiaries: 'Government school students from rural and economically weaker sections',
    impactMetrics: 'Serving 2+ million hot nutritious meals daily across 22,000 schools in 16 states',
    registrationNumber: 'REG-KA-2000-4521',
    registrationDate: new Date('2000-06-15'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 8200000,
    donorCount: 3100,
    volunteerCount: 520,
    programCount: 12,
    beneficiariesServed: 2000000,
    bankDetails: {
      accountName: 'The Akshaya Patra Foundation',
      bankName: 'HDFC Bank',
      accountNumber: '50200012345678',
      ifscCode: 'HDFC0000140'
    },
    representative: {
      name: 'Chanchalapathi Dasa',
      designation: 'Vice Chairman',
      phone: '9845012345',
      email: 'contact@akshayapatra.org',
      idType: 'pan' as const,
      idNumber: 'BCKPD4567G'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Goonj - A Voice, An Effort',
    description: 'Goonj envisions growing as an idea across the world, addressing basic ignored needs including clothing and sanitation, turning urban material waste into a resource for rural development and poverty relief with dignity.',
    mission: 'Using urban surplus clothing and household material as a tool for rural community development and disaster rehabilitation.',
    vision: 'An equitable world where dignity and essential living necessities reach the most remote households.',
    address: 'J-93, Sarita Vihar',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110076',
    contactEmail: 'mail@goonj.org',
    contactPhone: '9818098765',
    website: 'https://goonj.org',
    logo: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&auto=format&fit=crop&q=80',
    type: 'society' as const,
    legalStatus: 'Registered Society',
    operationalAreas: ['Disaster Relief', 'Poverty Alleviation', 'Rural Development', 'Sanitation'],
    targetBeneficiaries: 'Rural communities, daily wage laborers, disaster survivors',
    impactMetrics: 'Over 5,000 tons of urban surplus channeled to build bridges, roads, and village ponds',
    registrationNumber: 'REG-DEL-1999-3124',
    registrationDate: new Date('1999-03-24'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 6300000,
    donorCount: 2200,
    volunteerCount: 410,
    programCount: 14,
    beneficiariesServed: 800000,
    bankDetails: {
      accountName: 'Goonj Public Charitable Society',
      bankName: 'ICICI Bank',
      accountNumber: '000701234567',
      ifscCode: 'ICIC0000007'
    },
    representative: {
      name: 'Anshu Gupta',
      designation: 'Founder Director',
      phone: '9818098765',
      email: 'anshu@goonj.org',
      idType: 'pan' as const,
      idNumber: 'AGPTA8912K'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'HelpAge India',
    description: 'HelpAge India is a leading national charity providing healthcare, shelter homes, cataract surgeries, physiotherapy, and elder-helpline services to disadvantaged senior citizens across the nation for over 45 years.',
    mission: 'To work for the cause and care of disadvantaged older persons and improve their quality of life.',
    vision: 'A society where elderly individuals live a life of dignity, health, and security.',
    address: 'C-14, Qutab Institutional Area',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110016',
    contactEmail: 'headoffice@helpageindia.org',
    contactPhone: '9811099887',
    website: 'https://www.helpageindia.org',
    logo: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Charitable Trust',
    operationalAreas: ['Elderly Healthcare', 'Mobile Clinics', 'Cataract Surgeries', 'Dignity Support'],
    targetBeneficiaries: 'Destitute and marginalized elderly citizens in urban slums and rural hamlets',
    impactMetrics: '2.5 million elderly individuals supported annually across 180 mobile healthcare units',
    registrationNumber: 'REG-DEL-1978-1092',
    registrationDate: new Date('1978-04-28'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 5100000,
    donorCount: 1800,
    volunteerCount: 290,
    programCount: 11,
    beneficiariesServed: 500000,
    bankDetails: {
      accountName: 'HelpAge India Society',
      bankName: 'Axis Bank',
      accountNumber: '918010045678912',
      ifscCode: 'UTIB0000125'
    },
    representative: {
      name: 'Rohit Prasad',
      designation: 'Chief Executive Officer',
      phone: '9811099887',
      email: 'rohit.prasad@helpageindia.org',
      idType: 'pan' as const,
      idNumber: 'RPRSD5678M'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Teach For India',
    description: 'Teach For India is a nationwide movement of outstanding college graduates and working professionals who commit two years to teach full-time in low-income schools, fighting educational inequity across India.',
    mission: 'To build a movement of leaders who will eliminate educational inequity in India.',
    vision: 'One day, all children in India will attain an excellent education.',
    address: 'Godrej One, 2nd Floor, Pirojshanagar, Vikhroli East',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400079',
    contactEmail: 'contact@teachforindia.org',
    contactPhone: '9820011223',
    website: 'https://www.teachforindia.org',
    logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&auto=format&fit=crop&q=80',
    type: 'section8' as const,
    legalStatus: 'Section 8 Non-Profit Company',
    operationalAreas: ['Primary Education', 'Leadership Development', 'Teacher Training'],
    targetBeneficiaries: 'Underprivileged school children in government and affordable private schools',
    impactMetrics: '40,000+ students reached by 1,000+ Fellows across 8 major Indian cities',
    registrationNumber: 'REG-MH-2008-7712',
    registrationDate: new Date('2008-05-18'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 7400000,
    donorCount: 2600,
    volunteerCount: 850,
    programCount: 15,
    beneficiariesServed: 400000,
    bankDetails: {
      accountName: 'Teach To Lead Foundation',
      bankName: 'HDFC Bank',
      accountNumber: '00600340012345',
      ifscCode: 'HDFC0000060'
    },
    representative: {
      name: 'Shaheen Mistri',
      designation: 'CEO & Founder',
      phone: '9820011223',
      email: 'shaheen@teachforindia.org',
      idType: 'pan' as const,
      idNumber: 'SMSTR9012N'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'CRY - Child Rights and You',
    description: 'CRY works with parents, teachers, communities, and government bodies to ensure happy, healthy, and creative childhoods for millions of underprivileged Indian children through education, nutrition, and child safety.',
    mission: 'To enable individuals to take responsibility for the situation of the deprived Indian child and motivate them into action.',
    vision: 'A happy, healthy and creative childhood whose rights are protected and honored in a society that is built on respect for dignity.',
    address: '189/A Anand Estate, Sane Guruji Marg',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400011',
    contactEmail: 'cryinfo.mum@crymail.org',
    contactPhone: '9820098765',
    website: 'https://www.cry.org',
    logo: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Charitable Trust',
    operationalAreas: ['Child Rights', 'Education', 'Child Protection', 'Malnutrition'],
    targetBeneficiaries: 'Vulnerable children in tribal belts, rural districts, and urban slums',
    impactMetrics: 'Transformed the lives of 3+ million children across 19 states of India',
    registrationNumber: 'REG-MH-1979-4321',
    registrationDate: new Date('1979-02-14'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 6900000,
    donorCount: 2900,
    volunteerCount: 460,
    programCount: 16,
    beneficiariesServed: 3000000,
    bankDetails: {
      accountName: 'Child Rights and You',
      bankName: 'Kotak Mahindra Bank',
      accountNumber: '241189012345',
      ifscCode: 'KKBK0000958'
    },
    representative: {
      name: 'Puja Marwaha',
      designation: 'Chief Executive',
      phone: '9820098765',
      email: 'puja.marwaha@crymail.org',
      idType: 'pan' as const,
      idNumber: 'PMRWH3456P'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Pratham Education Foundation',
    description: 'Pratham is an innovative learning organization created to improve the quality of education in India. Focusing on high-quality, low-cost learning interventions to address gaps in reading and foundational mathematics.',
    mission: 'Every child in school and learning well through community-driven foundational literacy programs.',
    vision: 'Literacy and foundational learning accessible to every child across villages and urban communities in India.',
    address: 'B-4/58, Safdarjung Enclave',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110029',
    contactEmail: 'info@pratham.org',
    contactPhone: '9810987654',
    website: 'https://www.pratham.org',
    logo: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Charitable Trust',
    operationalAreas: ['Foundational Literacy', 'Vocational Skills', 'Digital Learning'],
    targetBeneficiaries: 'Primary school children in rural India and low-income urban clusters',
    impactMetrics: 'Impacted over 5 million children across 21 states with remedial learning',
    registrationNumber: 'REG-DEL-1994-6512',
    registrationDate: new Date('1994-08-10'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 8500000,
    donorCount: 3400,
    volunteerCount: 620,
    programCount: 19,
    beneficiariesServed: 5000000,
    bankDetails: {
      accountName: 'Pratham Education Foundation',
      bankName: 'State Bank of India',
      accountNumber: '109876543210',
      ifscCode: 'SBIN0000691'
    },
    representative: {
      name: 'Dr. Rukmini Banerji',
      designation: 'CEO',
      phone: '9810987654',
      email: 'rukmini@pratham.org',
      idType: 'pan' as const,
      idNumber: 'RBNRJ7890Q'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Green Earth Conservation Trust',
    description: 'Green Earth Conservation Trust focuses on massive afforestation, native tree planting, riverbank cleanups, rainwater harvesting, and environmental climate education across drought-prone regions of Maharashtra and Karnataka.',
    mission: 'To restore India’s ecological balance through native tree plantation drives and community clean water initiatives.',
    vision: 'A greener, cooler, and ecologically sustainable India with revitalized rivers and forests.',
    address: '42 Eco Enclave, Deccan Gymkhana',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411004',
    contactEmail: 'contact@greenearthtrust.org',
    contactPhone: '9822012345',
    website: 'https://greenearthtrust.org',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Charitable Trust',
    operationalAreas: ['Environment', 'Afforestation', 'Clean Water', 'Renewable Energy'],
    targetBeneficiaries: 'Farming communities, semi-arid rural villages, urban neighborhoods',
    impactMetrics: 'Over 650,000 native trees planted with an 88% survival rate across 35 districts',
    registrationNumber: 'REG-MH-2016-8923',
    registrationDate: new Date('2016-09-05'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 3900000,
    donorCount: 1400,
    volunteerCount: 780,
    programCount: 10,
    beneficiariesServed: 250000,
    bankDetails: {
      accountName: 'Green Earth Conservation Trust',
      bankName: 'HDFC Bank',
      accountNumber: '50100234567890',
      ifscCode: 'HDFC0000039'
    },
    representative: {
      name: 'Aditya Deshmukh',
      designation: 'Managing Trustee',
      phone: '9822012345',
      email: 'aditya@greenearthtrust.org',
      idType: 'pan' as const,
      idNumber: 'ADSHM4321R'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Sankara Eye Foundation India',
    description: 'Sankara Eye Foundation is committed to eliminating curable blindness across India. Through world-class super-specialty eye hospitals, they conduct free cataract surgeries, corneal transplants, and pediatric eye screenings for underserved communities.',
    mission: 'To provide quality eye care to all segments of society, regardless of their socio-economic status.',
    vision: 'An India free of preventable blindness and avoidable visual impairment.',
    address: 'Vidyakaruppur, Sri Sankara Eye Hospital Road',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641035',
    contactEmail: 'care@sankaraeye.com',
    contactPhone: '9842211223',
    website: 'https://www.sankaraeye.com',
    logo: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Public Charitable Trust',
    operationalAreas: ['Eye Care', 'Healthcare', 'Preventable Blindness', 'Pediatric Vision'],
    targetBeneficiaries: 'Rural elderly, underprivileged children, and low-income laborers',
    impactMetrics: 'Over 2.3 million free cataract surgeries performed with an 80:20 free-to-paying model',
    registrationNumber: 'REG-TN-1977-2291',
    registrationDate: new Date('1977-05-20'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 7800000,
    donorCount: 2700,
    volunteerCount: 310,
    programCount: 13,
    beneficiariesServed: 2300000,
    bankDetails: {
      accountName: 'Sankara Eye Care Institutions',
      bankName: 'Canara Bank',
      accountNumber: '1209101045678',
      ifscCode: 'CNRB0001209'
    },
    representative: {
      name: 'Dr. R.V. Ramani',
      designation: 'Founder & Managing Trustee',
      phone: '9842211223',
      email: 'dr.ramani@sankaraeye.com',
      idType: 'pan' as const,
      idNumber: 'RVRMN1234S'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Nari Shakti Women Empowerment Foundation',
    description: 'Nari Shakti works towards the social and economic independence of marginalized women through vocational tailoring, sanitary napkin production units, micro-enterprise mentoring, and free legal aid workshops.',
    mission: 'To economically uplift women from vulnerable backgrounds through skill acquisition and entrepreneurship.',
    vision: 'A gender-equal society where every woman has financial independence and voice in decision-making.',
    address: '104 Mahila Vikas Bhavan, C-Scheme',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    contactEmail: 'support@narishaktitrust.org',
    contactPhone: '9829012345',
    website: 'https://narishaktitrust.org',
    logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200&auto=format&fit=crop&q=80',
    type: 'society' as const,
    legalStatus: 'Registered Society',
    operationalAreas: ['Women Empowerment', 'Vocational Training', 'Financial Literacy', 'Legal Aid'],
    targetBeneficiaries: 'Single mothers, rural women artisans, and adolescent girls',
    impactMetrics: 'Trained over 45,000 women with 70% establishing self-sustaining livelihood units',
    registrationNumber: 'REG-RJ-2012-5401',
    registrationDate: new Date('2012-07-19'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 3400000,
    donorCount: 1100,
    volunteerCount: 280,
    programCount: 9,
    beneficiariesServed: 45000,
    bankDetails: {
      accountName: 'Nari Shakti Mahila Vikas Trust',
      bankName: 'Punjab National Bank',
      accountNumber: '0289000100234567',
      ifscCode: 'PUNB0028900'
    },
    representative: {
      name: 'Sunita Meena',
      designation: 'General Secretary',
      phone: '9829012345',
      email: 'sunita@narishaktitrust.org',
      idType: 'pan' as const,
      idNumber: 'SMNRA6789T'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Aarogya Seva Health Mission',
    description: 'Aarogya Seva is an international health volunteer organization providing structured healthcare services to underserved communities through doctors, dentists, nurses, and community health workers on a voluntary basis.',
    mission: 'Providing accessible, comprehensive, and compassionate healthcare to remote and vulnerable communities.',
    vision: 'Universal health coverage enabled by voluntary participation of the healthcare fraternity.',
    address: '88 Kalyan Nagar, HRBR Layout',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560043',
    contactEmail: 'volunteer@aarogyaseva.org',
    contactPhone: '9845511223',
    website: 'https://aarogyaseva.org',
    logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Public Trust',
    operationalAreas: ['Healthcare Camps', 'Preventive Medicine', 'Disaster Medical Response'],
    targetBeneficiaries: 'Tribal communities, remote hill populations, and disaster survivors',
    impactMetrics: '180+ medical camps conducted; 350,000 patients diagnosed and treated for free',
    registrationNumber: 'REG-KA-2014-9912',
    registrationDate: new Date('2014-11-03'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 4200000,
    donorCount: 1350,
    volunteerCount: 650,
    programCount: 11,
    beneficiariesServed: 350000,
    bankDetails: {
      accountName: 'Aarogya Seva Global Health Trust',
      bankName: 'State Bank of India',
      accountNumber: '341256789012',
      ifscCode: 'SBIN0009048'
    },
    representative: {
      name: 'Dr. Dayaprasad Kulkarni',
      designation: 'Founder & Medical Director',
      phone: '9845511223',
      email: 'dr.daya@aarogyaseva.org',
      idType: 'pan' as const,
      idNumber: 'DPKRN2345U'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  },
  {
    name: 'Jal Jeevan Sanjeevani Trust',
    description: 'Dedicated to resolving India’s water scarcity through community-built rainwater harvesting reservoirs, pond desiltation, solar-powered RO water stations, and sustainable sanitation in drought-prone rural clusters.',
    mission: 'Empowering drought-affected villages to become water-secure and economically self-reliant.',
    vision: 'Clean, safe, and abundant drinking water accessible to every household in drought-prone rural India.',
    address: '15 Gandhi Ashram Marg, Sabarmati',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380027',
    contactEmail: 'contact@jaljeevan.org',
    contactPhone: '9825012345',
    website: 'https://jaljeevan.org',
    logo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    coverImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=80',
    type: 'trust' as const,
    legalStatus: 'Registered Public Trust',
    operationalAreas: ['Water Conservation', 'Rainwater Harvesting', 'Sanitation', 'Rural Agriculture'],
    targetBeneficiaries: 'Smallholder farmers, village panchayats, and rural families in dry zones',
    impactMetrics: 'Restored 120 historic village water ponds; provided clean drinking water to 180,000 villagers',
    registrationNumber: 'REG-GJ-2015-7761',
    registrationDate: new Date('2015-01-22'),
    status: 'verified' as const,
    isVerified: true,
    totalDonations: 3800000,
    donorCount: 1200,
    volunteerCount: 390,
    programCount: 8,
    beneficiariesServed: 180000,
    bankDetails: {
      accountName: 'Jal Jeevan Sanjeevani Foundation',
      bankName: 'Bank of Baroda',
      accountNumber: '08450100012345',
      ifscCode: 'BARB0SABARM'
    },
    representative: {
      name: 'Ramesh Patel',
      designation: 'Managing Trustee',
      phone: '9825012345',
      email: 'ramesh@jaljeevan.org',
      idType: 'pan' as const,
      idNumber: 'RPATL5678V'
    },
    documents: {
      registrationCertificateUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      panCardUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600'
    }
  }
];

export const realisticProgramsTemplate = [
  {
    title: 'Mission Shiksha: Smart Classrooms for Rural Villages',
    shortDescription: 'Equipping 40 rural village schools with interactive digital learning screens, solar power backups, and libraries.',
    description: 'Mission Shiksha aims to bridge the digital and educational divide for students in grades 1 through 10 in remote government schools. We establish solar-powered smart audiovisual classrooms, provide tablets with regional language curriculum, and train local teachers in interactive teaching pedagogy.',
    category: 'education',
    programType: 'regular' as const,
    targetAmount: 650000,
    raisedAmount: 480000,
    beneficiariesCount: 4500,
    volunteersNeeded: 25,
    volunteersRegistered: 18,
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Govt. Senior Secondary Schools, Bassi Block'
  },
  {
    title: 'Annapoorna: Daily Nutritious Meals for 10,000 Children',
    shortDescription: 'Providing fresh, hygienic, and fortified mid-day meals to ensure zero classroom hunger in municipal schools.',
    description: 'Every morning, our high-capacity automated kitchen prepares freshly cooked, hot, balanced meals consisting of rice, dal, vegetables, and milk. By eliminating hunger from the classroom, attendance has increased by 38% and child malnutrition rates in target schools have reduced by half.',
    category: 'healthcare',
    programType: 'regular' as const,
    targetAmount: 850000,
    raisedAmount: 720000,
    beneficiariesCount: 10000,
    volunteersNeeded: 30,
    volunteersRegistered: 24,
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Bangalore',
    state: 'Karnataka',
    address: 'Municipal School Clusters, Peenya Industrial Area'
  },
  {
    title: 'Vision 2026: Free Cataract Surgeries & Eye Care Camps',
    shortDescription: 'Screening 15,000 rural elderly citizens and performing 1,200 free cataract replacement surgeries with intraocular lens.',
    description: 'Avoidable cataract blindness traps elderly citizens in dependency and isolation. Our mobile ophthalmology surgical buses visit remote villages, perform comprehensive vision diagnostics, and transport patients to our hospital base for free sutureless surgeries with medicines and post-op care.',
    category: 'healthcare',
    programType: 'regular' as const,
    targetAmount: 500000,
    raisedAmount: 390000,
    beneficiariesCount: 1200,
    volunteersNeeded: 20,
    volunteersRegistered: 15,
    images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    address: 'Rural Primary Health Centers, Pollachi Taluk'
  },
  {
    title: 'Vriksha Daan: 100,000 Native Tree Reforestation Drive',
    shortDescription: 'Planting and nurturing 100,000 native fruit and shade trees across degraded forest margins and village commons.',
    description: 'Fighting climate change and desertification through native biodiversity restoration. We plant Peepal, Neem, Banyan, Jamun, and Tamarind saplings with drip irrigation support, partnering with women self-help groups for continuous 3-year nurturing and survival monitoring.',
    category: 'environment',
    programType: 'regular' as const,
    targetAmount: 420000,
    raisedAmount: 310000,
    beneficiariesCount: 25000,
    volunteersNeeded: 50,
    volunteersRegistered: 42,
    images: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Pune',
    state: 'Maharashtra',
    address: 'Khadakwasla Watershed & Sinhagad Hills Foothills'
  },
  {
    title: 'Swasthya Express: Mobile Healthcare Van for Remote Hamlets',
    shortDescription: 'Fully equipped medical clinic on wheels with a doctor, nurse, and lab tests visiting 50 tribal villages weekly.',
    description: 'Tribal families often have to walk 20 kilometers to the nearest clinic. Our Swasthya Express brings general physicians, ultrasound diagnostics, basic blood tests, maternal healthcare, and free essential prescription medications directly to the village doorsteps on scheduled days.',
    category: 'healthcare',
    programType: 'regular' as const,
    targetAmount: 550000,
    raisedAmount: 410000,
    beneficiariesCount: 8000,
    volunteersNeeded: 15,
    volunteersRegistered: 11,
    images: [
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: false,
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Jawhar and Mokhada Tribal Belt, Palghar District'
  },
  {
    title: 'Hunar: Vocational Sewing & Livelihood Center for Women',
    shortDescription: 'Free 6-month certified tailoring, embroidery, and handicraft training with a donated sewing machine for graduates.',
    description: 'Empowering marginalized women and single mothers with market-linked tailoring skills. Participants learn apparel design, industrial machine operation, quality finishing, and e-commerce marketing, graduating with a free automated sewing machine to launch home enterprise.',
    category: 'education',
    programType: 'training' as const,
    targetAmount: 380000,
    raisedAmount: 295000,
    beneficiariesCount: 350,
    volunteersNeeded: 12,
    volunteersRegistered: 9,
    images: [
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Delhi',
    state: 'Delhi',
    address: 'Nari Vikas Kendra, Mangolpuri Community Hall'
  },
  {
    title: 'Clean Yamuna & Water Conservation Taskforce',
    shortDescription: 'Community-led plastic interception traps, weekly riverbank cleanups, and bio-remediation wetlands.',
    description: 'Mobilizing citizen volunteers, youth clubs, and ecological scientists to remove floating plastic waste from key river drain points, restore native riverbank vegetation, and install solar bio-aerators to restore dissolved oxygen levels for river life.',
    category: 'environment',
    programType: 'event' as const,
    targetAmount: 320000,
    raisedAmount: 240000,
    beneficiariesCount: 50000,
    volunteersNeeded: 60,
    volunteersRegistered: 48,
    images: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: false,
    city: 'New Delhi',
    state: 'Delhi',
    address: 'Yamuna Ghats, Wazirabad to Kalindi Kunj Stretch'
  },
  {
    title: 'Warmth for All: Winter Relief & Dignity Kits',
    shortDescription: 'Distributing 20,000 thermal blankets, woolens, and hygienic dignity kits to homeless and daily wage laborers.',
    description: 'During severe northern winter spells, hundreds of street sleepers and pavement families face life-threatening cold. Our midnight relief patrol teams distribute certified thermal blankets, jackets, socks, woolen caps, and emergency dry food ration kits.',
    category: 'poverty-alleviation',
    programType: 'event' as const,
    targetAmount: 450000,
    raisedAmount: 380000,
    beneficiariesCount: 20000,
    volunteersNeeded: 40,
    volunteersRegistered: 35,
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: false,
    city: 'New Delhi',
    state: 'Delhi',
    address: 'Interstate Bus Terminus & Railway Station Vicinity'
  },
  {
    title: 'Digital Udaan: Free Computer Coding & AI Labs for Youth',
    shortDescription: 'Training 600 low-income high school students in basic computer skills, Python coding, and web design.',
    description: 'Opening high-tech career avenues for underprivileged students who lack home computers. We establish fully furnished computer labs with internet connectivity, teaching practical digital literacy, spreadsheet handling, coding, and basic graphic design to boost youth employment.',
    category: 'education',
    programType: 'training' as const,
    targetAmount: 520000,
    raisedAmount: 410000,
    beneficiariesCount: 600,
    volunteersNeeded: 18,
    volunteersRegistered: 14,
    images: [
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Hyderabad',
    state: 'Telangana',
    address: 'Community Learning Center, Kukatpally'
  },
  {
    title: 'Jal Sanjeevani: 50 Village Pond Desiltation & Rain Recharge',
    shortDescription: 'Deepening 50 historic village water tanks to hold 200 million liters of rainwater for drinking and irrigation.',
    description: 'Revitalizing traditional community water storage structures before monsoon arrives. Using earthmovers and local farmer labor, we remove decades of silt from water bodies, construct percolation pits, and build recharge trenches to permanently raise regional groundwater levels.',
    category: 'environment',
    programType: 'regular' as const,
    targetAmount: 700000,
    raisedAmount: 560000,
    beneficiariesCount: 40000,
    volunteersNeeded: 30,
    volunteersRegistered: 26,
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: false,
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'Dholera and Mandal Taluk Village Clusters'
  },
  {
    title: 'Elderly Day Care & Memory Wellness Hub',
    shortDescription: 'Safe, stimulating daytime care, physiotherapy, medical checks, and recreational games for abandoned seniors.',
    description: 'Providing companionship, warm nutritious lunches, mental stimulation activities, and regular geriatric doctor consultations for senior citizens whose families are at work or who live alone in dense city neighborhoods.',
    category: 'healthcare',
    programType: 'regular' as const,
    targetAmount: 340000,
    raisedAmount: 260000,
    beneficiariesCount: 300,
    volunteersNeeded: 15,
    volunteersRegistered: 12,
    images: [
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: false,
    city: 'Kolkata',
    state: 'West Bengal',
    address: 'Shanti Bhavan Senior Center, Salt Lake Sector 2'
  },
  {
    title: 'Every Child in School: Slum Bridge Learning Centers',
    shortDescription: 'Accelerated basic learning camps to reintegrate 1,000 child laborers and dropouts back into formal government schools.',
    description: 'Working in high-density urban slums to identify children who dropped out to support their families. Our bridge learning centers provide flexible hours, engaging interactive study materials, free school bags, and official admission support into formal schools.',
    category: 'education',
    programType: 'regular' as const,
    targetAmount: 480000,
    raisedAmount: 390000,
    beneficiariesCount: 1000,
    volunteersNeeded: 22,
    volunteersRegistered: 17,
    images: [
      'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80'
    ],
    status: 'active' as const,
    featured: true,
    city: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Slum Clearance Board Colonies, Kannagi Nagar'
  }
];

export async function sanitizeAndSeedRealisticData(isManual = false) {
  try {
    console.log('🔍 Checking database for Latin placeholder data or missing NGOs...');
    
    // Check if any NGO has Latin dummy descriptions or if Smile Foundation exists
    const hasLatinNGO = await NGO.findOne({
      $or: [
        { description: /damnatio|verbum|curto|crapula|cunctatio|lorem/i },
        { name: /Bernier|Olson|Lowe|Dickinson|Weimann/i }
      ]
    });
    const verifiedCount = await NGO.countDocuments({ status: 'verified' });
    const hasSmile = await NGO.findOne({ name: 'Smile Foundation India' });

    if (!hasLatinNGO && verifiedCount >= 8 && hasSmile && !isManual) {
      console.log('✅ Database already populated with valid realistic NGOs and Programs.');
      return;
    }

    console.log('🔄 Cleaning old Latin placeholder data and populating authentic NGOs & Programs...');

    // 1. Ensure at least one admin user exists
    let adminUser = await User.findOne({ role: 'ngo_admin' });
    if (!adminUser) {
      const passwordHash = await bcrypt.hash('Admin@1234', 10);
      adminUser = await User.create({
        name: 'Dr. Rajesh Sharma',
        email: 'admin@sevadaan.org',
        password: passwordHash,
        phone: '9810123456',
        role: 'ngo_admin',
        isEmailVerified: true,
        isPhoneVerified: true,
        isActive: true,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80'
      });
      console.log('✅ Created root admin user:', adminUser.email);
    }

    // 2. Clear old Latin dummy NGOs and Programs
    await NGO.deleteMany({});
    await Program.deleteMany({});
    await Volunteer.deleteMany({});

    // 3. Insert realistic verified NGOs
    console.log(`Seeding ${realisticNGOs.length} verified real Indian NGOs...`);
    const ngosToInsert = realisticNGOs.map(ngo => ({
      ...ngo,
      adminId: adminUser._id
    }));
    const createdNGOs = await NGO.insertMany(ngosToInsert);
    console.log(`✅ Inserted ${createdNGOs.length} verified NGOs.`);

    // 4. Insert realistic Programs connected to these NGOs
    console.log(`Seeding ${realisticProgramsTemplate.length} real English Programs with Unsplash imagery...`);
    const programsToInsert = realisticProgramsTemplate.map((prog, index) => {
      const assignedNGO = createdNGOs[index % createdNGOs.length];
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 15);
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 8);

      return {
        ...prog,
        ngo: assignedNGO._id,
        createdBy: adminUser._id,
        startDate: startDate,
        endDate: endDate,
        location: {
          address: prog.address,
          city: prog.city,
          state: prog.state,
          pincode: '110001',
          coordinates: {
            latitude: 28.6139 + (index * 0.1),
            longitude: 77.2090 + (index * 0.1)
          }
        },
        participantsRegistered: Math.floor(prog.beneficiariesCount * 0.6),
        sdgGoals: [1, 3, 4, 11],
        tags: [prog.category, 'community', 'verified', 'india'],
        requirements: ['Commitment to community service', 'Passionate about making a social impact'],
        impact: {
          description: `Directly transforming lives through structured, measurable ${prog.category} initiatives.`,
          metrics: [
            { name: 'Target Beneficiaries', value: prog.beneficiariesCount, unit: 'people' },
            { name: 'Volunteers Engaged', value: prog.volunteersRegistered, unit: 'volunteers' }
          ]
        },
        updates: [
          {
            title: 'Project Phase 1 Commenced Successfully',
            description: 'Ground teams have been deployed and community orientation sessions are in full swing.',
            date: new Date()
          }
        ]
      };
    });

    const createdPrograms = await Program.insertMany(programsToInsert);
    console.log(`✅ Inserted ${createdPrograms.length} active programs.`);

    // 5. Update NGO programCounts
    for (const ngo of createdNGOs) {
      const count = await Program.countDocuments({ ngo: ngo._id });
      await NGO.findByIdAndUpdate(ngo._id, { programCount: count });
    }

    console.log('🎉 REALISTIC DATABASE SEEDING COMPLETED SUCCESSFULLY!');
  } catch (error) {
    console.error('❌ Data sanitization/seeding error:', error);
  }
}

// Run directly if called as a script
if (require.main === module) {
  mongoose.connect(MONGODB_URI).then(() => {
    return sanitizeAndSeedRealisticData(true);
  }).then(() => {
    process.exit(0);
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
