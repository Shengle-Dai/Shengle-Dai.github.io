import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type TimelineItem } from '../types';

export const items: Array<TimelineItem> = [
	// Experience items
	{
		slug: 'apple-swe-intern',
		company: 'Apple',
		description:
			"When I first came to Apple, I was given a situation that was quite difficult to solve: over 80 staff were struggling with Excel spreadsheets and Wrike tickets to keep track of more than 1200 business cases. The whole process of handing off was terrible, and people would spend a lot of time just trying to find out who was in charge of what.\n\nI didn't even hesitate to scrap the whole workflow and start over from zero. The main point was how you could possibly get people to stop using a system they've been accustomed to for years and switch to a new one? In order to meet the requirements, I used Next.js for the frontend as the team wanted something new yet still to be in their comfort zone, and for the backend, I chose Express and PostgreSQL to provide a solid server that can handle complex queries with ease.\n\nDesigning the authentication part was really great—I went ahead and integrated JWT with a modular RBAC system that could support 6 different business roles, and each of them having their own permission levels. Rather than inserting permissions directly in the code at every location, I developed it to be configurable so it would not be necessary to make code changes when adding new roles.\n\nIt was my privilege indeed to have such a great time with my n8n AI workflow that I was able to build which automatically summarizes business cases. Managers had to go through hundreds of cases to spend their time reading, and now they get intelligent summaries which reduce their review time by 40%. Besides that, I implemented OAuth for SSO that is very easy to use, SMTP notifications (that have been optimized to p95 latency of 8s), optimistic concurrency control to avoid data conflicts, and ACID-compliant audit logging so that we could always know what and why changes were made.\n\nSo, what was the outcome? The Intake time was cut by 35%, the manual hand-offs were no more, and the staff were in fact delighted with the system. It is an amazing feeling to witness the people who really use the product getting the benefits of what I have built.",
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
			"I learned that good communication is just as important as good code. Joining an agile team of 80 people was completely different from working solo. Now I had to review pull requests, coordinate with designers and managers, and ship MVPs every semester.\n\nFeeling like I did in a large team, I wrote guides for the new members. I wanted to help those people get to work quickly. Writing documentation was one of my first actions.\n\nThis work was fascinating. I developed prompts for the LLM program, which took deadlines from course syllabi, something simple, but getting a performance of 97% accuracy required a lot of prompt engineering and handling of a few dozen edge cases; some professors format syllabi in wildly different ways, so it was necessary to make the system robust.\n\nLater I integrated Supabase real-time to solve a tricky problem, namely: how to avoid stale data when multiple users access the same piece of information simultaneously? — Real-time was the solution. This meant all users always saw the latest changes, which greatly reduced the number of conflicts. I also implemented an OAuth-based authentication system to give access to Firebase and Supabase, the interesting challenge was to have multiple auth providers and keep the consistency of the UI.\n\nIt's one thing to implement features, it's another to build them in such a way that your colleagues can understand and maintain them. Working in such a large team taught me to write clearer code, to communicate better my technical decisions and to appreciate the value of good documentation.",
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
