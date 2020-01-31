const initial_state: StateUi = {
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
		case "THROTTLE_STARTED": {
			if (action.payload === "FETCH_REPOSITORIES") {
				return { ...state, status: "waiting" };
			}

			return state;
		}

		case "FETCH_REPOSITORIES": {
			return { ...state, status: "loading" };
		}

		case "FETCH_REPOSITORIES_COMPLETED": {
			return {
				...state,
				status: null,
				repositories_ids: action.payload.repositories_ids,
				repositories_found: action.payload.repositories_found
			};
		}

		case "FETCH_REPOSITORIES_FAILED": {
			return {
				...state,
				status: action.payload ? "too_many_requests" : "error"
			};
		}

		case "UPDATE_LANGUAGE": {
			return {
				...state,
				language:
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
