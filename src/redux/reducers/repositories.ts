const initial_state: StateRepositories = {};

export const reducer = (
	state = initial_state,
	action: Actions
): StateRepositories => {
	switch (action.type) {
		// After repositories are fetched we add them to the store
		case "FETCH_REPOSITORIES_COMPLETED": {
			return action.payload.repositories;
		}

		default:
			return state;
	}
};
