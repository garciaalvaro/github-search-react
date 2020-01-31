export const throttleStarted: ActionCreatorWithPayload<ActionThrottleStarted> = payload => ({
	type: "THROTTLE_STARTED",
	payload
});

export const fetchRepositories: ActionCreatorWithMeta<ActionFetchRepositories> = meta => ({
	type: "FETCH_REPOSITORIES",
	meta
});

export const fetchRepositoriesCompleted: ActionCreatorWithPayload<ActionFetchRepositoriesCompleted> = payload => ({
	type: "FETCH_REPOSITORIES_COMPLETED",
	payload
});

export const fetchRepositoriesFailed: ActionCreatorWithPayload<ActionFetchRepositoriesFailed> = payload => ({
	type: "FETCH_REPOSITORIES_FAILED",
	payload
});

export const updateKeywords: ActionCreatorWithPayload<ActionUpdateKeywords> = payload => ({
	type: "UPDATE_KEYWORDS",
	payload
});

export const updateLanguage: ActionCreatorWithPayload<ActionUpdateLanguage> = payload => ({
	type: "UPDATE_LANGUAGE",
	payload
});

export const updateLastUpdate: ActionCreatorWithPayload<ActionUpdateLastUpdate> = payload => ({
	type: "UPDATE_LAST_UPDATE",
	payload
});

export const updateMinStars: ActionCreatorWithPayload<ActionUpdateMinStars> = payload => ({
	type: "UPDATE_MIN_STARS",
	payload
});
