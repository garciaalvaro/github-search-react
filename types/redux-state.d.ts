type StateRepositories = Record<Repository["id"], Repository>;

type StateUi = {
	fetch_id: number;
	repositories_found: number;
	repositories_ids: Repository["id"][];
	keywords: string;
	language: null | Language;
	last_update: null | LastUpdate;
	min_stars: null | MinStars;
	page: number;
	status:
		| null
		| "characters_0"
		| "characters_1"
		| "characters_2"
		| "waiting"
		| "loading"
		| "no_results"
		| "too_many_requests"
		| "error";
};

// Global State
type State = {
	repositories: StateRepositories;
	ui: StateUi;
};
