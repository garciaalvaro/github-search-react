// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchMock = (response: Record<string, any>, time = 100): void => {
	global.fetch = jest.fn(
		() =>
			new Promise(resolve =>
				setTimeout(
					() =>
						// @ts-expect-error For the response to be accurate it would need headers, etc.
						resolve({
							ok: true,
							status: 200,
							json: () =>
								new Promise(resolve => resolve(response)),
						}),
					time
				)
			)
	);
};
