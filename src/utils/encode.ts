/**
 * Given a string, encode it to be used in a url
 */
export const encode = (string = ""): string => {
	return encodeURIComponent(string).replace(/%20/g, "+");
};
