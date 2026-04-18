import manifest from '../../portfolio.manifest.json';

const username = manifest.username || 'niko';
const deployPath = manifest.deployPath || '/niko/';
const siteTitle = manifest.siteTitle || 'Niko Jekkonen | CV';
const assetBase = import.meta.env.BASE_URL || deployPath;

export const siteConfig = {
  siteTitle,
  username,
  deployPath,
  shortTitle: 'Niko Jekkonen',
  role: 'Software engineering student',
  metaDescription:
    'CV and profile of Niko Jekkonen, a solution-oriented software engineering student with hands-on ICT support, service desk, and customer-facing experience.',
  profileImage: `${assetBase}niko-jekkonen.jpg`,
  resumePdf: `${assetBase}cv-nikojekkonen.pdf`,
  summary:
    'Solution-oriented software engineering student with hands-on experience in ICT support and service desk work. Strong practical understanding of systems, users, and real-world problem solving, supported by technical skills. Curious, fast-learning, and collaborative, with a service-minded approach and motivation to build reliable, user-focused solutions as part of a professional support team.',
};

export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const highlights = [
  'ICT support and service desk experience',
  'Java, C#, JavaScript, React',
  'Microsoft Intune and device deployment',
  'Customer-facing communication',
  'Student leadership and governance',
];

export const contactItems = [
  {
    label: 'Phone',
    value: '045 213 3233',
    href: 'tel:+358452133233',
  },
  {
    label: 'Email',
    value: 'jekkonenniko@gmail.com',
    href: 'mailto:jekkonenniko@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nikojekkonen',
    href: 'https://www.linkedin.com/in/nikojekkonen/',
  },
];

export const educationItems = [
  {
    title: 'Software Engineering BA',
    institution: 'Savonia University of Applied Sciences',
    period: '2021-present',
    details: ['211 / 240 credits completed'],
  },
  {
    title: 'Vocational Qualification in Business and Administration',
    institution: 'Vocational College of Savo, Sakky',
    period: '2017-2020',
    details: [
      'Taitaja 2019 finalist, Customer service and sales',
      'Taitaja 2018 semi-finalist, Customer service and sales',
    ],
  },
];

export const languageItems = [
  'Finnish - Native',
  'English - Excellent (OLS-C2)',
];

export const skillGroups = [
  {
    title: 'Programming & Development',
    items: ['Java', 'C#', 'JavaScript', 'React'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git','GitHub','GitHub Actions', 'Visual Studio Code', 'Microsoft 365', 'Google Workspace', 'Canva'],
  },
  {
    title: 'Cloud Services',
    items: ['Microsoft Azure (basic)', 'AWS (basic)'],
  },
  {
    title: 'Databases',
    items: ['MySQL (basic)'],
  },
  {
    title: 'Operating Systems',
    items: ['Windows', 'iOS', 'Android'],
  },
  {
    title: 'ICT Support & Management',
    items: ['Windows Autopilot', 'Microsoft Intune', 'Device deployment and management', 'Efecte ticket system'],
  },
];

export const workExperience = [
  {
    period: '04/2025-10/2025',
    title: 'ICT Services Trainee',
    organization: 'Savonia Ammattikorkeakoulu Oy / Savonia University of Applied Sciences',
    description:
      'Delivered on-site ICT support in a multi-user environment, resolved hardware and software issues, and supported end users in their daily IT needs.',
    bullets: [
      'Participated in Windows device deployment through Microsoft Intune.',
      "Managed devices and software across the organization's network.",
      'Helped ensure efficient and reliable ICT services.',
    ],
  },
  {
    period: '2022-2023',
    title: 'Customer Service Specialist',
    organization: 'K-Citymarket Päiväranta, Kuopio',
    description:
      'Delivered customer service in a retail environment and supported daily sales activities while maintaining a high standard of customer experience.',
    bullets: [],
  },
  {
    period: '2020-2021',
    title: 'Customer Service & Telemarketing',
    organization: 'DNA Oyj, Kuopio',
    description:
      'Handled customer service and active sales, resolved service issues, and contributed to sales targets through clear and solution-oriented communication.',
    bullets: [],
  },
];

export const leadershipExperience = [
  
    {
    period: '2025',
    title: 'Student Council, Vice-chair',
    organization: 'Student Union of Savonia University of Applied Sciences SAVOTTA',
    description:
      'Supported student union operations and coordinated decision-making processes within the organization. Represented student interests and contributed to the development of the student community.',
    bullets: [],
  },
   {
    period: '05/2023-05/2025',
    title: 'Board of Directors, member',
    organization: 'Savonia University of Applied Sciences',
    description:
      'Participated in institutional governance and decision-making on a strategic level, representing student interests and contributing to the development of the university.',
    bullets: [],
  },
  {
    period: '2024',
    title: 'Union Board, member',
    organization: 'Insinööriopiskelijaliitto IOL ry / The Union of Engineering Students in Finland',
    description:
      'Worked in educational policy and local association coordination while representing students in the Student Delegation of Akava.',
    bullets: [],
  },
  
  {
    period: '2022-2024',
    title: 'Board Roles at KINRA',
    organization: 'Kuopion Insinööriopiskelijat KINRA ry',
    description:
      'Served first as a board member responsible for member acquisition and event coordination, and later as Chair of the Board in 2023.',
    bullets: [
      'Led board operations and supported decision-making.',
      'Ensured effective collaboration and goal-oriented work within the organization.',
    ],
  },
];

export const certifications = [
  'Negotiating Agreements (Insinööriliitto, 2025)',
  'Service Marketing (Insinööriliitto, 2023)',
  'Chairperson Training (Insinööriliitto, 2023)',
  'Basics of Organizational Activities (Insinööriliitto, 2022)',
  'Occupational Safety Card',
];

export const sectionCopy = {
  experience: {
    eyebrow: 'Experience',
    title: 'Work experience grounded in user support',
    description:
      'The CV emphasizes practical ICT support, customer service, and hands-on problem solving in real environments.',
  },
  leadership: {
    eyebrow: 'Leadership',
    title: 'Community and governance work alongside studies',
    description:
      'Student organization roles form a strong part of the profile, combining responsibility, coordination, and representation.',
  },
  certifications: {
    eyebrow: 'Training',
    title: 'Additional training and certifications',
    description:
      'Short-form courses and certifications complement the academic and practical experience on the page.',
  },
};
