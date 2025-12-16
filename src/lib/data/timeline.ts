import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type TimelineItem } from '../types';

export const items: Array<TimelineItem> = [
	// Experience items
	{
		slug: 'databricks-swe-intern',
		company: 'Databricks',
		description:
			'Excited to join Databricks as a Software Engineering Intern! Looking forward to working on cutting-edge data and AI infrastructure.',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'Mountain View, CA',
		period: { from: new Date(2026, 5, 1), to: new Date(2026, 7, 31) },
		skills: getSkills('python', 'ts', 'reactjs'),
		name: 'Software Engineering Intern',
		color: 'red' as const,
		video: '/databricks.gif',
		links: [],
		logo: Assets.Databricks,
		shortDescription:
			'Incoming Summer Software Engineering Intern at Databricks! Looking forward to contributing to innovative data and AI solutions.'
	},
	{
		slug: 'apple-swe-intern',
		company: 'Apple',
		description:
			'I created a highly customized internal web portal that automated the legacy manual workflow. Here shows the functionality of creating a customized survey.',
		contract: ContractType.Internship,
		type: 'Software Engineering',
		location: 'Beijing, China',
		period: { from: new Date(2025, 5, 30), to: new Date(2025, 8, 7) },
		skills: getSkills('nextjs', 'nodejs', 'expressjs', 'postgresql', 'ts', 'jwt', 'oauth'),
		name: 'Software Engineering Intern',
		color: 'blue' as const,
		video: '/apple.mov',
		links: [],
		logo: Assets.Apple,
		shortDescription:
			'My first enterprise experience! Learned to build production-level applications and work with real users'
	},
	{
		slug: 'cornell-dti',
		company: 'Cornell Digital Tech & Innovation',
		description:
			'I worked on:\nCornellGO - a game for exploring campus,\nSyllabusSync - extracting key info from syllabi,\nCURaise - platform for holding fundraisers.',
		type: 'Software Development',
		links: [{ to: 'https://github.com/cornell-dti', label: 'GitHub' }],
		location: 'Ithaca, NY',
		period: { from: new Date(2024, 8, 1) },
		skills: getSkills('ts', 'reactjs', 'firebase', 'supabase', 'oauth'),
		name: 'Full-Stack Software Development Engineer',
		color: 'red' as const,
		logo: Assets.CornellDTI,
		screenshots: [
			{
				label: 'Subteam Pickle Ball Social',
				src: '/curaise-social.png'
			},
			{
				label: 'Writting Documentation for Team',
				src: '/curaise-documentation.png'
			}
		],
		shortDescription:
			'Growing as a team player in a large agile environment while mentoring newcomers and shipping real products'
	},
	{
		slug: 'cornell-ta',
		company: 'Cornell Bowers CIS',
		description:
			'Fall 2024, I served as a TA for the course CS 3110: Functional Programming and Data Structures.\nSpring and Fall 2025, I served as a TA for CS 3780: Intro to Maching Learning.',
		contract: ContractType.PartTime,
		type: 'Teaching',
		location: 'Ithaca, NY',
		period: { from: new Date(2024, 7, 1) },
		skills: getSkills('python', 'ocaml'),
		name: 'Teaching Assistant',
		color: 'green' as const,
		links: [],
		screenshots: [
			{
				label: 'CS 3110 Website',
				src: '/CS3110.png'
			},
			{
				label: 'CS 3780 Mascot',
				src: '/CS3780-mascot.png'
			}
		],
		logo: Assets.Cornell,
		shortDescription:
			'Giving back by helping others succeed—mentoring students taught me as much as I taught them'
	},
	// Project items
	{
		slug: 'ezmodel',
		color: '#00D9FF' as const,
		description: 'Ezmodel is a "figma" for multiple developers to design database schema together.',
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
		video: '/ezmodel.mp4'
	},
	{
		slug: 'ithaca-traveller',
		color: '#FF6B35' as const,
		description: 'Ithaca Traveller was designed for people to explore famous places in Ithaca.',
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
				label: 'We Winning the Best Backend Award!',
				src: '/ithaca-traveller-winning.png'
			},
			{
				label: 'UI Screenshot',
				src: '/ithaca-traveller.png'
			},
			{
				label: 'Local Testing',
				src: '/ithaca-traveller-testing.png'
			}
		]
	}
].sort((a, b) => b.period.from.getTime() - a.period.from.getTime()); // Sort by date, newest first

export const title = 'Projects & Experience';
