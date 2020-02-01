// Repository received from the API
interface RepositoryRaw {
	id: string;
	html_url: string;
	description: string;
	name: string;
	owner: {
		login: string;
	};
	stargazers_count: number;
	language: string;
	updated_at: string;
	license: null | {
		name: string;
	};
}

interface Repository {
	id: string;
	url: string;
	description: string;
	name: string;
	user: string;
	stars: string;
	language: string;
	updated: string;
	license: string;
}

type MinStars = "10" | "100" | "1000" | "10000" | "50000" | "100000";

type LastUpdate =
	| "last_week"
	| "last_month"
	| "last_6_months"
	| "last_year"
	| "last_2_years"
	| "last_3_years";

type Language =
	| "JavaScript"
	| "TypeScript"
	| "HTML"
	| "CSS"
	| "Objective-C"
	| "Java"
	| "Ruby"
	| "Python"
	| "PHP"
	| "C#";
