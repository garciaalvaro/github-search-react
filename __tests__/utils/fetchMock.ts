export const fetchMock = (response: Record<string, any>, time = 100) => {
	global.fetch = jest.fn(
		() =>
			new Promise(resolve =>
				setTimeout(
					() =>
						resolve({
							ok: true,
							status: 200,
							json: () => response,
						}),
					time
				)
			)
	);
};
