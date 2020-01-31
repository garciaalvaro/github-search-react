// Actions
interface ActionPlain<T> {
	type: T;
}

interface ActionWithPayload<T, P> extends ActionPlain<T> {
	payload: P;
}

interface ActionWithMeta<T, M> extends ActionPlain<T> {
	meta: M;
}

// Action Creators
interface ActionCreatorPlain<A extends Actions> {
	(): A;
}

interface ActionCreatorWithPayload<A extends ActionsWithPayload> {
	(payload: A["payload"]): A;
}

interface ActionCreatorWithMeta<A extends ActionsWithMeta> {
	(meta: A["meta"]): A;
}

// Defined action creators
type ActionFetchRepositories = ActionWithMeta<
	"FETCH_REPOSITORIES",
	{ throttle_time: number }
>;

type ActionFetchRepositoriesCompleted = ActionWithPayload<
	"FETCH_REPOSITORIES_COMPLETED",
	{
		repositories: StateRepositories;
		repositories_ids: StateUi["repositories_ids"];
		repositories_found: StateUi["repositories_found"];
	}
>;

type ActionFetchRepositoriesFailed = ActionWithPayload<
	"FETCH_REPOSITORIES_FAILED",
	boolean
>;

type ActionUpdateKeywords = ActionWithPayload<
	"UPDATE_KEYWORDS",
	StateUi["keywords"]
>;

type ActionThrottleStarted = ActionWithPayload<"THROTTLE_STARTED", string>;

type ActionUpdateLanguage = ActionWithPayload<
	"UPDATE_LANGUAGE",
	StateUi["language"]
>;

// Defined actions
type ActionsPlain = ActionFetchRepositories;

type ActionsWithPayload =
	| ActionThrottleStarted
	| ActionFetchRepositoriesCompleted
	| ActionFetchRepositoriesFailed
	| ActionUpdateKeywords
	| ActionUpdateLanguage;

type ActionsWithMeta = ActionFetchRepositories;

type Actions = ActionsPlain | ActionsWithPayload | ActionsWithMeta;
