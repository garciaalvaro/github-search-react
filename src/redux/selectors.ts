export const getKeywords: Selector<StateUi["keywords"]> = state =>
	state.ui.keywords;

export const getStatus: Selector<StateUi["status"]> = state => state.ui.status;

export const getLanguage: Selector<StateUi["language"]> = state =>
	state.ui.language;

export const getLastUpdate: Selector<StateUi["last_update"]> = state =>
	state.ui.last_update;

export const getMinStars: Selector<StateUi["min_stars"]> = state =>
	state.ui.min_stars;

export const isLanguageActive: Selector<boolean, StateUi["language"]> = (
	state,
	language
) => state.ui.language === language;

export const getRepositoriesIds: Selector<
	StateUi["repositories_ids"]
> = state => state.ui.repositories_ids;

export const getRepositoriesFound: Selector<
	StateUi["repositories_found"]
> = state => state.ui.repositories_found;

export const getRepository: Selector<Repository, Repository["id"]> = (
	state,
	id
) => state.repositories[id];

export const getPage: Selector<StateUi["page"]> = state => state.ui.page;
