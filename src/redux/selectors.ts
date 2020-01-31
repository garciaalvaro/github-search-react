export const getKeywords: Selector<StateUi["keywords"]> = state =>
	state.ui.keywords;

export const getStatus: Selector<StateUi["status"]> = state => state.ui.status;

export const getLanguage: Selector<StateUi["language"]> = state =>
	state.ui.language;
