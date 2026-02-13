import { Metadata } from 'next';
import SkillsClient from '../components/skills/skills';

export const metadata: Metadata = {
  title: 'Skills & Tech Stack | Elkana Maina',
  description: 'A deep dive into my technical expertise, ranging from frontend architecture to backend systems.',
  keywords: [
    'Software Engineering Skills',
    'Full Stack Tech Stack',
		'Django Developer',
		'Flutter Developer',
		'FastAPI Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'Backend Architecture',
    'DevOps Skills',
  ],
};

export default function Page() {
  return <SkillsClient />;
}