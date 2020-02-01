const initial_state: StateUi = {
	fetch_id: 0,
	repositories_found: 0,
	repositories_ids: [],
	keywords: "",
	language: null,
	last_update: null,
	min_stars: null,
	page: 1,
	status: "characters_0"
};

export const reducer = (state = initial_state, action: Actions): StateUi => {
	switch (action.type) {
		// A Throttle started
		case "THROTTLE_STARTED": {
			// Update the status to waiting
			if (action.payload === "FETCH_REPOSITORIES") {
				return {
					...state,
					status: "waiting",
					repositories_ids: [],
					repositories_found: 0,
					fetch_id: state.fetch_id + 1
				};
			}

			return state;
		}

		case "FETCH_REPOSITORIES": {
			return { ...state, status: "loading" };
		}

		case "FETCH_REPOSITORIES_COMPLETED": {
			const { repositories_ids, repositories_found } = action.payload;

			return {
				...state,
				status: repositories_ids.length ? null : "no_results",
				repositories_ids,
				repositories_found
			};
		}

		case "FETCH_REPOSITORIES_FAILED": {
			return {
				...state,
				status: action.payload ? "too_many_requests" : "error",
				repositories_ids: [],
				repositories_found: 0
			};
		}

		case "UPDATE_LANGUAGE": {
			return {
				...state,
				language:
					// If the received language is the previous one, toggle it
					action.payload === state.language ? null : action.payload
			};
		}

		case "UPDATE_LAST_UPDATE": {
			return {
				...state,
				last_update: action.payload
			};
		}

		case "UPDATE_MIN_STARS": {
			return {
				...state,
				min_stars: action.payload
			};
		}

		case "UPDATE_PAGE": {
			return {
				...state,
				page: action.payload
			};
		}

		case "UPDATE_KEYWORDS": {
			const { payload } = action;

			return {
				...state,
				keywords: payload,
				status:
					payload.length === 0
						? "characters_0"
						: payload.length === 1
						? "characters_1"
						: payload.length === 2
						? "characters_2"
						: state.status
			};
		}

		default:
			return state;
	}
};
