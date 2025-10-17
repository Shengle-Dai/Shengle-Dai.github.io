import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'apple-swe-intern',
		company: 'Apple',
		description: 'Re-architected a legacy Excel+Wrike workflow into an internal Next.js/Express/PostgreSQL portal used by 80+ staff managing 1200+ business cases, cutting intake time by 35% and eliminating manual hand-offs. Implemented JWT authentication and RBAC with fine-grained, modular permission logic across 6 business roles. Built an n8n AI workflow that summarizes business cases, reducing manager review cycle time by 40%. Improved system reliability with OAuth integration, SMTP notifications (p95 latency: 8s), optimistic concurrency control (OCC), ACID audit logging, and Git-based history records.',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'Beijing, China',
		period: { from: new Date(2025, 4, 1), to: new Date(2025, 7, 31) },
		skills: getSkills('nextjs', 'nodejs', 'expressjs', 'postgresql', 'ts', 'jwt', 'oauth'),
		name: 'Software Engineering Intern',
		color: 'blue',
		links: [],
		logo: Assets.Apple,
		shortDescription: 'Built Next.js/Express portal for 80+ staff, cutting intake time by 35%'
	},
	{
		slug: 'cornell-dti',
		company: 'Cornell Digital Tech & Innovation',
		description: 'Collaborated in an 80-member agile team, shipping semester-based MVPs and reviewing 2+ PRs per sprint. Onboarded and mentored new members with comprehensive Notion docs, accelerating ramp-up productivity. Developed LLM prompts for syllabi deadline extraction (97% accuracy), authentication flows with Firebase and Supabase OAuth. Integrated Supabase real-time to reduce stale writes with live concurrent updates.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Ithaca, NY',
		period: { from: new Date(2024, 8, 1) },
		skills: getSkills('ts', 'reactjs', 'firebase', 'supabase', 'oauth'),
		name: 'Full-Stack Software Development Engineer',
		color: 'red',
		links: [],
		logo: Assets.CornellDTI,
		shortDescription: 'Full-stack engineer in 80-member agile team, built auth flows and LLM features'
	},
	{
		slug: 'cornell-ta',
		company: 'Cornell Bowers CIS',
		description: 'Mentored 40+ students on 2K+ line software projects in core Computer Science courses (Machine Learning and Data Structures). Designed automated testing suites and grading scripts in Python and OCaml for 10+ programming assignments, ensuring consistent evaluation and providing detailed feedback to enhance student learning.',
		contract: ContractType.PartTime,
		type: 'Teaching',
		location: 'Ithaca, NY',
		period: { from: new Date(2024, 7, 1) },
		skills: getSkills('python', 'ocaml'),
		name: 'Teaching Assistant',
		color: 'green',
		links: [],
		logo: Assets.Cornell,
		shortDescription: 'TA for Machine Learning & Data Structures, mentored 40+ students'
	}
];

export const title = 'Experience';
