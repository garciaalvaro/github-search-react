export const getTextFromStatus = (status: StateUi["status"]): string => {
	switch (status) {
		case "characters_0":
			return "Enter some text in the search field above";

		case "characters_1":
			return "Enter 2 more characters";

		case "characters_2":
			return "Enter 1 more character";

		case "too_many_requests":
			return (
				"It looks like too many requests were made. " +
				"Please try again in a minute."
			);

		case "error":
			return (
				"It looks like there was an error getting the data. " +
				"Please try again in some time."
			);

		case "waiting":
			return "Waiting...";

		case "loading":
			return "Loading...";

		case "no_results":
			return "No results";

		default:
			return "";
	}
};
