import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor of Science in Computer Science',
		description:
			'Pursuing a B.S. in Computer Science with a strong academic record (GPA: 4.19/4.0). Comprehensive coursework covering full-stack development, systems programming, machine learning, and theoretical computer science.',
		location: 'Ithaca, NY',
		logo: Assets.Cornell,
		name: 'Cornell University',
		organization: 'Cornell University',
		period: { from: new Date(2023, 8, 24), to: new Date() },
		shortDescription: 'B.S. in Computer Science, GPA: 4.19 - USACO Platinum, AMC top 5%',
		slug: 'cornell-university',
		subjects: [
			'OOP and Data Structures',
			'Backend Development',
			'Functional Programming',
			'Computer Organization',
			'Systems Programming',
			'UNIX Tools and Scripting',
			'C++ Programming',
			'Machine Learning',
			'Algorithm Analysis',
			'Database Systems',
			'Computer Networks'
		]
	},
	{
		degree: 'High School Diploma',
		description:
			'Attended one of the top high schools in Beijing, where I developed my passion for mathematics and problem-solving. Active member of the Mathematics Competition Club, which built my analytical thinking and competitive programming foundation.',
		location: 'Beijing, China',
		logo: Assets.Unknown,
		name: 'The Second High School Attached to Beijing Normal University',
		organization: 'The Second High School Attached to Beijing Normal University',
		period: { from: new Date(2020, 8, 1), to: new Date(2023, 5, 30) },
		shortDescription: 'Mathematics Competition Club - Built foundation in algorithmic thinking',
		slug: 'bnu-second-high-school',
		subjects: ['Mathematics', 'Computer Science', 'Physics', 'Competition Mathematics']
	}
];

export const title = 'Education';
