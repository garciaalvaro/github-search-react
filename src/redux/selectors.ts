export const getKeywords: Selector<StateUi["keywords"]> = state =>
	state.ui.keywords;

export const getStatus: Selector<StateUi["status"]> = state => state.ui.status;

export const getLanguage: Selector<StateUi["language"]> = state =>
	state.ui.language;

export const getLastUpdate: Selector<StateUi["last_update"]> = state =>
	state.ui.last_update;

export const isLanguageActive: Selector<boolean, StateUi["language"]> = (
	state,
	language
) => state.ui.language === language;
