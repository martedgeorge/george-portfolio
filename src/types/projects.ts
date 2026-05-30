export interface Project {
  id: string
  title: string
  category: string
  year: number
  description: string
  image: string
  tags: string[]
}

export const featuredProjects: Project[] = [
  {
    id: 'overload',
    title: 'Overload',
    category: 'Brand Identity',
    year: 2024,
    description: 'A bold rebranding for a creative agency pushing boundaries in digital culture.',
    image: '/images/overload.jpg',
    tags: ['Branding', 'Identity', 'Motion'],
  },
  {
    id: 'lost-found',
    title: 'Lost & Found',
    category: 'Packaging Design',
    year: 2024,
    description: 'Sophisticated packaging system for a sustainable luxury goods company.',
    image: '/images/lost-found.jpg',
    tags: ['Packaging', 'Design System', 'Sustainability'],
  },
  {
    id: 'night-shift',
    title: 'Night Shift',
    category: 'Editorial Design',
    year: 2023,
    description: 'A premium publication exploring nightlife culture and underground design.',
    image: '/images/night-shift.jpg',
    tags: ['Editorial', 'Typography', 'Culture'],
  },
  {
    id: 'art-club',
    title: 'Art Club',
    category: 'Community Brand',
    year: 2023,
    description: 'Vibrant identity system for an emerging contemporary art collective.',
    image: '/images/art-club.jpg',
    tags: ['Identity', 'Community', 'Art'],
  },
  {
    id: 'nike',
    title: 'Nike Campaign',
    category: 'Campaign Design',
    year: 2023,
    description: 'Integrated campaign concept for a major athletic brand collaboration.',
    image: '/images/nike.jpg',
    tags: ['Campaign', 'Sport', 'Digital'],
  },
  {
    id: 'frat-house',
    title: 'Frat House',
    category: 'Brand Strategy',
    year: 2023,
    description: 'Complete brand overhaul for an experimental creative space and community.',
    image: '/images/frat-house.jpg',
    tags: ['Branding', 'Strategy', 'Community'],
  },
]
