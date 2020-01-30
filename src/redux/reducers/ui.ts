const initial_state: StateUi = {
	repositories_found: 0,
	keywords: "",
	language: null,
	last_update: null,
	min_stars: null,
	page: 1
};

export const reducer = (
	state = initial_state,
	action: Actions | ActionsWithPayload
): StateUi => {
	switch (action.type) {
		default:
			return state;
	}
};
