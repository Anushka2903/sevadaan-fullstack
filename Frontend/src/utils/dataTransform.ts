import { NGO, Program, VolunteerOpportunity, Testimonial } from '../types';

const curatedNGOImages = [
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80'
];

const curatedProgramImages = [
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80'
];

const curatedVolunteerImages = [
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80'
];

function isInvalidOrPlaceholderImage(url?: string): boolean {
  if (!url || typeof url !== 'string') return true;
  const lower = url.toLowerCase();
  return (
    lower.includes('placeholder.com') ||
    lower.includes('faker-js/assets-person-portrait') ||
    lower.includes('avatars.githubusercontent.com') ||
    lower.includes('example.com')
  );
}

function isLatinText(text?: string): boolean {
  if (!text || typeof text !== 'string') return false;
  return /damnatio|verbum|curto|crapula|cunctatio|adipiscor|temporibus|optio|asperiores|cotidie|lorem/i.test(text);
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Transform backend data to frontend types
export const transformNGO = (backendNGO: any): NGO => {
  const id = backendNGO._id || backendNGO.id || 'ngo';
  const name = backendNGO.name || 'Verified Indian NGO';
  const imgIndex = hashCode(id + name) % curatedNGOImages.length;
  
  let logo = backendNGO.logo || backendNGO.coverImage;
  if (isInvalidOrPlaceholderImage(logo)) {
    logo = curatedNGOImages[imgIndex];
  }

  let description = backendNGO.description || '';
  if (isLatinText(description) || description.length < 15) {
    description = `Empowering underprivileged communities through structured education, nutrition, healthcare, and livelihood welfare initiatives across India.`;
  }

  let mission = backendNGO.mission || '';
  if (isLatinText(mission) || mission.length < 15) {
    mission = `To provide holistic support and development opportunities to underserved children, youth, and families.`;
  }

  return {
    id,
    name,
    logo,
    description,
    mission,
    address: backendNGO.address || backendNGO.location?.address || 'Community Center Road',
    city: backendNGO.city || backendNGO.location?.city || 'Delhi',
    state: backendNGO.state || backendNGO.location?.state || 'Delhi',
    contactEmail: backendNGO.contactEmail || backendNGO.email || 'contact@sevadaan.org',
    contactPhone: backendNGO.contactPhone || backendNGO.phone || '+91 98765 43210',
    website: backendNGO.website,
    socialLinks: backendNGO.socialLinks,
    createdAt: backendNGO.createdAt || new Date().toISOString(),
    updatedAt: backendNGO.updatedAt || new Date().toISOString(),
  };
};

export const transformProgram = (backendProgram: any): Program => {
  const id = backendProgram._id || backendProgram.id || 'prog';
  let title = backendProgram.title || 'Community Welfare Initiative';
  const imgIndex = hashCode(id + title) % curatedProgramImages.length;

  if (isLatinText(title) || title.includes('asymmetric parallelism') || title.includes('tertiary knowledge user')) {
    const titles = [
      'Mission Shiksha: Digital Classrooms for Rural Villages',
      'Annapoorna: Daily Nutritious Meals for Schoolchildren',
      'Vision 2026: Free Cataract Surgeries & Eye Care Camps',
      'Vriksha Daan: Native Tree Plantation & Clean Air Initiative',
      'Swasthya Express: Mobile Healthcare Clinic on Wheels',
      'Hunar: Vocational Tailoring & Livelihood for Women',
      'Digital Udaan: Free Computer Coding Labs for Youth',
      'Jal Sanjeevani: Village Pond Revival & Clean Drinking Water'
    ];
    title = titles[imgIndex % titles.length];
  }

  let description = backendProgram.description || '';
  if (isLatinText(description) || description.length < 20) {
    description = `Dedicated to improving quality of life by mobilizing volunteers and community resources for measurable on-ground impact.`;
  }

  let imageUrl = backendProgram.images?.[0] || backendProgram.imageUrl;
  if (isInvalidOrPlaceholderImage(imageUrl)) {
    imageUrl = curatedProgramImages[imgIndex];
  }

  return {
    id,
    ngoId: backendProgram.ngo?._id || backendProgram.ngo?.id || backendProgram.ngoId || '101',
    title,
    description,
    startDate: backendProgram.startDate || new Date().toISOString(),
    endDate: backendProgram.endDate,
    location: backendProgram.location?.city || backendProgram.location?.state || backendProgram.location || 'India',
    status: backendProgram.status === 'active' ? 'ongoing' : backendProgram.status || 'ongoing',
    eligibilityCriteria: backendProgram.eligibilityCriteria || 'Open to all community members in need of assistance.',
    capacity: backendProgram.beneficiariesCount || 500,
    currentParticipants: backendProgram.volunteersRegistered || 25,
    imageUrl,
    createdAt: backendProgram.createdAt || new Date().toISOString(),
    updatedAt: backendProgram.updatedAt || new Date().toISOString(),
  };
};

export const transformVolunteerOpportunity = (backendOpportunity: any): VolunteerOpportunity => {
  const id = backendOpportunity._id || backendOpportunity.id || 'vol';
  let title = backendOpportunity.title || 'Community Volunteering Opportunity';
  const imgIndex = hashCode(id + title) % curatedVolunteerImages.length;

  if (isLatinText(title) || title.includes('asymmetric parallelism') || title.includes('application - healthcare')) {
    const volunteerTitles = [
      'Weekend Reading & Math Tutor for Rural Children',
      'School Nutrition & Fresh Meal Distribution Coordinator',
      'Community Tree Plantation & Green Volunteer',
      'Mobile Health Camp Patient Support Assistant',
      'Digital Literacy & Computer Skills Mentor',
      'Eye Screening Camp Volunteer & Patient Guide'
    ];
    title = volunteerTitles[imgIndex % volunteerTitles.length];
  }

  let description = backendOpportunity.description || '';
  if (isLatinText(description) || description.length < 20) {
    description = `Join our passionate ground volunteer team to assist with local community outreach, event coordination, and participant guidance.`;
  }

  let imageUrl = backendOpportunity.imageUrl || backendOpportunity.images?.[0] || backendOpportunity.ngo?.logo;
  if (isInvalidOrPlaceholderImage(imageUrl)) {
    imageUrl = curatedVolunteerImages[imgIndex];
  }

  return {
    id,
    ngoId: backendOpportunity.ngo?._id || backendOpportunity.ngo?.id || backendOpportunity.ngoId || '101',
    title,
    description,
    location: backendOpportunity.location?.city || backendOpportunity.location?.state || backendOpportunity.location || 'India',
    startDate: backendOpportunity.startDate || new Date().toISOString(),
    endDate: backendOpportunity.endDate,
    skills: backendOpportunity.skills && backendOpportunity.skills.length > 0 ? backendOpportunity.skills : ['Communication', 'Teamwork', 'Patience', 'Community Outreach'],
    requiredHours: backendOpportunity.requiredHours || backendOpportunity.volunteersNeeded || 4,
    status: backendOpportunity.status === 'active' ? 'open' : backendOpportunity.status || 'open',
    imageUrl,
    createdAt: backendOpportunity.createdAt || new Date().toISOString(),
    updatedAt: backendOpportunity.updatedAt || new Date().toISOString(),
  };
};

export const transformTestimonial = (backendTestimonial: any): Testimonial => {
  return {
    id: backendTestimonial._id || backendTestimonial.id,
    ngoId: backendTestimonial.ngo?._id || backendTestimonial.ngoId,
    authorName: backendTestimonial.authorName || backendTestimonial.name || 'Supporter',
    authorRole: backendTestimonial.authorRole || backendTestimonial.role || 'Volunteer',
    content: backendTestimonial.content || backendTestimonial.message || 'Supporting this initiative has been one of the most fulfilling experiences.',
    rating: backendTestimonial.rating || 5,
    date: backendTestimonial.date || backendTestimonial.createdAt || new Date().toISOString(),
    avatar: backendTestimonial.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  };
};
