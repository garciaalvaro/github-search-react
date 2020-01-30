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

// Repository
interface Repository {
	id: string;
	url: string;
	description: string;
	name: string;
	user: string;
	stars: number;
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

// State for each reducer
type StateRepositories = Record<Repository["id"], Repository>;
interface StateUi {
	repositories_found: number;
	keywords: string;
	language: null | Language;
	last_update: null | LastUpdate;
	min_stars: null | MinStars;
	page: number;
}

// All States
interface State {
	repositories: StateRepositories;
	ui: StateUi;
}

// Redux Action
interface Action<T> {
	type: T;
}
interface ActionWithPayload<T, P> extends Action<T> {
	payload: P;
}

// Redux Action Creator
interface ActionCreator<A extends Actions> {
	(): A;
}
interface ActionCreatorWithPayload<A extends ActionsWithPayload> {
	(payload: A["payload"]): A;
}

// Redux actions - Repositories
type ActionFetchRepositories = Action<"FETCH_REPOSITORIES">;
type ActionFetchRepositoriesCompleted = ActionWithPayload<
	"FETCH_REPOSITORIES_COMPLETED",
	RepositoryRaw[]
>;
type ActionFetchRepositoriesFailed = ActionWithPayload<
	"FETCH_REPOSITORIES_FAILED",
	string
>;

// Redux Actions
type Actions = ActionFetchRepositories;

type ActionsWithPayload =
	| ActionFetchRepositoriesCompleted
	| ActionFetchRepositoriesFailed;

// Selector
type Selector<T, P = null> = (state: State, ...args: P[]) => T;
