import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type TimelineItem } from '../types';

export const items: Array<TimelineItem> = [
	// Experience items
	{
		slug: 'apple-swe-intern',
		company: 'Apple',
		description:
			"**The Challenge:** When I first came to Apple, I was given a situation that was quite difficult to solve: over 80 staff were struggling with Excel spreadsheets and Wrike tickets to keep track of more than 1200 business cases. The whole process of handing off was terrible, and people would spend a lot of time just trying to find out who was in charge of what.\n\n**Building the Solution:** I didn't even hesitate to scrap the whole workflow and start over from zero. The main challenge was getting people to stop using a system they've been accustomed to for years:\n\n• **Tech Stack Choices:** Used Next.js for the frontend (something new yet still in the team's comfort zone) and Express + PostgreSQL for the backend to handle complex queries with ease\n\n• **Authentication & RBAC:** Integrated JWT with a modular RBAC system supporting 6 different business roles with their own permission levels. Made it configurable so adding new roles wouldn't require code changes\n\n• **AI-Powered Automation:** Built an n8n AI workflow that automatically summarizes business cases, reducing managers' review time by 40%. They no longer had to spend hours reading through hundreds of cases\n\n• **Enterprise Features:** Implemented OAuth for SSO, SMTP notifications (optimized to p95 latency of 8s), optimistic concurrency control to avoid data conflicts, and ACID-compliant audit logging\n\n**The Impact:** Intake time was cut by 35%, manual hand-offs were eliminated, and the staff were delighted with the system. It's an amazing feeling to witness the people who really use the product getting the benefits of what I built.",
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
			"**Team Collaboration:** I learned that good communication is just as important as good code. Joining an agile team of 80 people was completely different from working solo—now I had to review pull requests, coordinate with designers and managers, and ship MVPs every semester.\n\n• **Mentorship & Documentation:** Wrote guides for new members to help them get up to speed quickly. Writing clear documentation became one of my first priorities in the large team setting\n\n• **LLM Prompt Engineering:** Developed prompts for an LLM program that extracts deadlines from course syllabi. Achieving 97% accuracy required extensive prompt engineering and handling dozens of edge cases—professors format syllabi in wildly different ways, so making the system robust was essential\n\n• **Real-Time Data Sync:** Integrated Supabase real-time to solve a tricky problem: how to avoid stale data when multiple users access the same information simultaneously? Real-time updates meant all users always saw the latest changes, greatly reducing conflicts\n\n• **Multi-Provider Authentication:** Implemented an OAuth-based authentication system for both Firebase and Supabase. The interesting challenge was managing multiple auth providers while keeping the UI consistent\n\n**Key Takeaway:** It's one thing to implement features, it's another to build them in a way that colleagues can understand and maintain. Working in such a large team taught me to write clearer code, communicate technical decisions better, and appreciate the value of good documentation.",
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
		description: 'Mentorship is what I value the most.',
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
		description: 'Ezmodel is just "figma" for designing database schema.',
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
		description: 'Ithaca Traveller was my first project for people to explore places in Ithaca.',
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
