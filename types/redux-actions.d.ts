// Actions
type ActionPlain<T> = {
	type: T;
};

type ActionWithPayload<T, P> = ActionPlain<T> & {
	payload: P;
};

type ActionWithMeta<T, M> = ActionPlain<T> & {
	meta: M;
};

// Action Creators
type ActionCreatorPlain<A extends Actions> = {
	(): A;
};

type ActionCreatorWithPayload<A extends ActionsWithPayload> = {
	(payload: A["payload"]): A;
};

type ActionCreatorWithMeta<A extends ActionsWithMeta> = {
	(meta: A["meta"]): A;
};

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

type ActionUpdateLastUpdate = ActionWithPayload<
	"UPDATE_LAST_UPDATE",
	StateUi["last_update"]
>;

type ActionUpdateMinStars = ActionWithPayload<
	"UPDATE_MIN_STARS",
	StateUi["min_stars"]
>;

type ActionUpdatePage = ActionWithPayload<"UPDATE_PAGE", StateUi["page"]>;

// Defined actions
type ActionsPlain = ActionFetchRepositories;

type ActionsWithPayload =
	| ActionThrottleStarted
	| ActionFetchRepositoriesCompleted
	| ActionFetchRepositoriesFailed
	| ActionUpdateKeywords
	| ActionUpdateLanguage
	| ActionUpdateLastUpdate
	| ActionUpdateMinStars
	| ActionUpdatePage;

type ActionsWithMeta = ActionFetchRepositories;

type Actions = ActionsPlain | ActionsWithPayload | ActionsWithMeta;
