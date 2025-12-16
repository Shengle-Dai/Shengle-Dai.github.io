import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Shengle (Frank)';

export const lastName = 'Dai';

export const description =
	"Hi! I'm a Computer Science student at Cornell who loves building software that teams can rely on. Whether it's <strong>backend systems</strong>, full-stack apps, or <strong>collaborative projects</strong>, I bring strong technical skills and a <strong>genuine enthusiasm for teamwork</strong>. I thrive in <strong>agile environments</strong>, enjoy mentoring others, and believe <strong>the best code comes from great communication</strong>. Always eager to learn, contribute meaningfully, and grow alongside talented engineers!";

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Shengle-Dai' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/shengle-dai-2b6471292/'
	},
	{
		platform: Platform.Email,
		link: 'sd924@cornell.edu'
	}
];

export const skills = getSkills(
	'python',
	'java',
	'javascript',
	'ts',
	'golang',
	'cpp',
	'nodejs',
	'reactjs',
	'nextjs',
	'svelte',
	'flask',
	'expressjs',
	'postgresql',
	'docker'
);
