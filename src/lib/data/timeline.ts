import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type TimelineItem } from '../types';

export const items: Array<TimelineItem> = [
	// Experience items
	{
		slug: 'apple-swe-intern',
		company: 'Apple',
		description:
			'Re-architected a legacy Excel+Wrike workflow into an internal Next.js/Express/PostgreSQL portal used by 80+ staff managing 1200+ business cases, cutting intake time by 35% and eliminating manual hand-offs. Implemented JWT authentication and RBAC with fine-grained, modular permission logic across 6 business roles. Built an n8n AI workflow that summarizes business cases, reducing manager review cycle time by 40%. Improved system reliability with OAuth integration, SMTP notifications (p95 latency: 8s), optimistic concurrency control (OCC), ACID audit logging, and Git-based history records.',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'Beijing, China',
		period: { from: new Date(2025, 5, 30), to: new Date(2025, 8, 7) },
		skills: getSkills('nextjs', 'nodejs', 'expressjs', 'postgresql', 'ts', 'jwt', 'oauth'),
		name: 'Software Engineering Intern',
		color: 'blue',
		links: [],
		logo: Assets.Apple,
		shortDescription:
			'My first enterprise experience! Learned to build production-level applications and work with real users'
	},
	{
		slug: 'cornell-dti',
		company: 'Cornell Digital Tech & Innovation',
		description:
			'Collaborated in an 80-member agile team, shipping semester-based MVPs and reviewing 2+ PRs per sprint. Onboarded and mentored new members with comprehensive Notion docs, accelerating ramp-up productivity. Developed LLM prompts for syllabi deadline extraction (97% accuracy), authentication flows with Firebase and Supabase OAuth. Integrated Supabase real-time to reduce stale writes with live concurrent updates.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Ithaca, NY',
		period: { from: new Date(2024, 8, 1) },
		skills: getSkills('ts', 'reactjs', 'firebase', 'supabase', 'oauth'),
		name: 'Full-Stack Software Development Engineer',
		color: 'red',
		links: [],
		logo: Assets.CornellDTI,
		shortDescription:
			'Growing as a team player in a large agile environment while mentoring newcomers and shipping real products'
	},
	{
		slug: 'cornell-ta',
		company: 'Cornell Bowers CIS',
		description:
			'Mentored 40+ students on 2K+ line software projects in core Computer Science courses (Machine Learning and Data Structures). Designed automated testing suites and grading scripts in Python and OCaml for 10+ programming assignments, ensuring consistent evaluation and providing detailed feedback to enhance student learning.',
		contract: ContractType.PartTime,
		type: 'Teaching',
		location: 'Ithaca, NY',
		period: { from: new Date(2024, 7, 1) },
		skills: getSkills('python', 'ocaml'),
		name: 'Teaching Assistant',
		color: 'green',
		links: [],
		logo: Assets.Cornell,
		shortDescription:
			'Giving back by helping others succeed—mentoring students taught me as much as I taught them'
	},
	// Project items
	{
		slug: 'ezmodel',
		color: '#00D9FF',
		description:
			'Led a 4-engineer team to build a comprehensive database designer that auto-generates SQL schemas and CRUD APIs. Designed a low-latency Golang backend (<80ms in-region) with WebSocket for real-time collaborative schema editing. Developed an MCP (Model Context Protocol) server that analyzes project context and provides intelligent suggestions on tables, keys, and indexes. Established a robust CI/CD pipeline with GitHub Actions for automated unit and integration tests and deployments, ensuring code quality and rapid iteration.',
		shortDescription:
			'Leading my first engineering team! Learning to balance technical challenges with collaboration and mentorship',
		links: [{ to: 'https://github.com/Shengle-Dai/ezmodel', label: 'GitHub' }],
		logo: Assets.EzModel,
		name: 'EzModel',
		period: {
			from: new Date(2024, 8, 1)
		},
		skills: getSkills('golang', 'websocket', 'supabase', 'svelte', 'ts'),
		type: 'Database Design Tool',
		screenshots: [
			{
				label: 'Real-time Schema Editor',
				src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Auto-generated SQL',
				src: 'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'MCP Context Analysis',
				src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'ithaca-traveller',
		color: '#FF6B35',
		description:
			"Engineered the backend system for an Ithaca travel guide app, winning the Best Backend Award (among 100+ students) at Cornell Engineering's first-year hackathon for robust design and reliability. Implemented a Flask backend with SQLAlchemy/SQLite data models and RESTful APIs. Integrated a real-time weather API to provide up-to-date information for travelers. Containerized the application with Docker and deployed on Google Cloud Platform, demonstrating proficiency in modern DevOps practices.",
		shortDescription:
			'My first project, and it got the hackathon win! This award showed me I could build reliable systems and boosted my confidence',
		links: [{ to: 'https://github.com/HackGroup1/IthacaTraveller-API', label: 'GitHub' }],
		logo: Assets.IthacaTraveller,
		name: 'IthacaTraveller',
		period: {
			from: new Date(2023, 10, 1),
			to: new Date(2023, 11, 31)
		},
		skills: getSkills('python', 'flask', 'sqlite', 'docker'),
		type: 'Travel Guide App',
		screenshots: [
			{
				label: 'API Documentation',
				src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Database Schema',
				src: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: 'Weather API Integration',
				src: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
].sort((a, b) => b.period.from.getTime() - a.period.from.getTime()); // Sort by date, newest first

export const title = 'Projects & Experience';
