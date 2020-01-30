import { prepareRepository } from "../utils/prepareRepository";

const initial_state: StateRepositories = {};

export const reducer = (
	state = initial_state,
	action: Actions | ActionsWithPayload
): StateRepositories => {
	switch (action.type) {
		// After repositories are fetched we add them to the store
		case "FETCH_REPOSITORIES_COMPLETED": {
			const repositories_fetched = action.payload.reduce(
				(acc, repository) => ({
					...acc,
					[repository.id]: prepareRepository(repository)
				}),
				{}
			);

			return { ...state, ...repositories_fetched };
		}

		default:
			return state;
	}
};
