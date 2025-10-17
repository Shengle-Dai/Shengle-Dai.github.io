import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	// Programming Languages
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'Proficient in Python for backend development, machine learning, and automation. Used extensively in academic projects, teaching assistant work, and building Flask-based REST APIs.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description:
			'Strong foundation in Java for object-oriented programming and data structures. Applied in coursework and software engineering projects.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Extensive experience with JavaScript for full-stack web development, including frontend interactions and Node.js backend services.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Expert in TypeScript for type-safe development across React, Next.js, Express, and Svelte projects. Used in production applications at Apple and Cornell DTI.',
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'golang',
		color: 'cyan',
		description:
			'Designed high-performance backend systems with Golang, achieving <80ms latency for real-time WebSocket applications in EzModel.',
		logo: Assets.Go,
		name: 'Golang',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'Solid understanding of C++ for systems programming, algorithm competitions (USACO Platinum), and performance-critical applications.',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'orange',
		description:
			'Proficient in SQL for database design, queries, and optimization. Experience with PostgreSQL and SQLite in production environments.',
		logo: Assets.PostgreSQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ocaml',
		color: 'orange',
		description:
			'Functional programming experience with OCaml, used for teaching assistant work and building automated testing suites.',
		logo: Assets.Ocaml,
		name: 'OCaml',
		category: 'pro-lang'
	}),
	// Frameworks
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Backend development with Node.js for building scalable server-side applications and RESTful APIs.',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'gray',
		description:
			'Built production-grade Express.js backends at Apple, handling authentication, authorization, and business logic for 80+ staff members.',
		logo: Assets.ExpressJs,
		name: 'Express.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'black',
		description:
			'Award-winning Flask backend development for IthacaTraveller, featuring RESTful APIs, SQLAlchemy ORM, and real-time weather integration.',
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Developed dynamic, responsive frontend applications with React. Experience includes state management, hooks, and component-based architecture.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'framework'
	}),
	defineSkill({
		slug: 'nextjs',
		color: 'black',
		description:
			'Built full-stack Next.js applications at Apple, featuring server-side rendering, API routes, and optimized performance for enterprise use.',
		logo: Assets.Nextjs,
		name: 'Next.js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:
			'Modern frontend development with Svelte for EzModel, leveraging reactive programming and minimal bundle sizes.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'framework'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description:
			'Utility-first CSS framework for rapid UI development with consistent, responsive design patterns.',
		logo: Assets.Tailwind,
		name: 'TailwindCSS',
		category: 'framework'
	}),
	// Databases & Cloud
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description:
			'Production experience with PostgreSQL for relational database design, transactions, and performance optimization at Apple.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'sqlite',
		color: 'blue',
		description:
			'Embedded database development with SQLite for IthacaTraveller, using SQLAlchemy ORM for data modeling.',
		logo: Assets.Sqlite,
		name: 'SQLite',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description:
			'Implemented Firebase authentication flows and real-time database features for Cornell DTI projects.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'supabase',
		color: 'green',
		description:
			'Integrated Supabase OAuth and real-time features to reduce stale writes in collaborative applications.',
		logo: Assets.Supabase,
		name: 'Supabase',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description:
			'Containerized applications with Docker for consistent deployment across development and production environments.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description:
			'Cloud infrastructure experience with AWS for scalable application deployment and management.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	// Tools & Practices
	defineSkill({
		slug: 'jwt',
		color: 'purple',
		description:
			'Implemented JWT authentication and session management for secure API access control.',
		logo: Assets.JWT,
		name: 'JWT',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'oauth',
		color: 'blue',
		description:
			'Integrated OAuth 2.0 flows with Firebase, Supabase, and custom providers for secure third-party authentication.',
		logo: Assets.OAuth,
		name: 'OAuth',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'websocket',
		color: 'green',
		description:
			'Real-time bidirectional communication with WebSocket for collaborative editing features in EzModel.',
		logo: Assets.WebSocket,
		name: 'WebSocket',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jest',
		color: 'red',
		description:
			'Unit and integration testing with Jest for JavaScript/TypeScript applications.',
		logo: Assets.Jest,
		name: 'Jest',
		category: 'test'
	}),
	// Markup & Style
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Semantic HTML5 for accessible, SEO-friendly web applications.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Modern CSS3 including Flexbox, Grid, animations, and responsive design principles.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
