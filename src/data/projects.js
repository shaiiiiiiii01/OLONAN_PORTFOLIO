import clinic from '../assets/images/projects/gc-clinic.jpg';
import lcrms from '../assets/images/projects/lcrms.jpg';
import light from '../assets/images/projects/light-attend.jpg';

export const projects = [
  {
    title: 'GC Clinic System',
    description:
      'A web-based appointment management system for Gordon College Clinic that allows students to schedule medical appointments, communicate with clinic staff, and manage clinic visits more efficiently.',
    tags: ['Live Website', 'Web Application'],
    image: clinic,
    links: [
      { label: 'Live Website', url: 'https://gcclinic.joyceolonan.com/' },
      { label: 'GitHub Repository', url: 'https://github.com/shaiiiiiiii01/GC-CLINIC-SYSTEM.git' },
    ],
  },
  {
    title: 'Light Attend',
    description:
      'A web-based church attendance management system that uses QR codes to record member attendance during church services and events. It also helps manage members, volunteers, ministries, and attendance records.',
    tags: ['Web Application', 'QR Code Attendance'],
    image: light,
    links: [{ label: 'GitHub Repository', url: 'https://github.com/shaiiiiiiii01/Light-Attend.git' }],
  },
  {
    title: 'LCRMS – Local Community Records Management System',
    description:
      'An installable desktop application developed for Barangay Old Calabans, designed to organize, store, and manage barangay records through a centralized database for easier data management and retrieval.',
    tags: ['Desktop Application', 'Database Management'],
    image: lcrms,
    links: [{ label: 'GitHub Repository', url: 'https://github.com/shaiiiiiiii01/LCRMS-.git' }],
  },
];
