const response_default = {
	ok: true,
	status: 200,
	json: () => ({
		items: [],
		total_count: 0,
		incomplete_results: false
	})
};

interface Response {
	ok: boolean;
	status: number;
	json: () => null | FetchedData;
}

/**
 * This function mocks the fetch function. To be used in Jest.
 */
export const getFetchMock = (
	response: Partial<Response> = response_default,
	time = 0
) =>
	new Promise(resolve =>
		setTimeout(() => resolve({ ...response_default, ...response }), time)
	);
