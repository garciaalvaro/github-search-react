import { encode } from "./encode";
import { getPrevDateFrom } from "./getPrevDateFrom";

type Props = Pick<
	StateUi,
	"keywords" | "language" | "last_update" | "min_stars" | "page"
>;

/**
 * Simple function to return the url and query to fetch from
 */
export const getUrl = (props: Props) => {
	const { keywords, language, last_update, min_stars, page } = props;

	return [
		// Base
		"https://api.github.com/search/repositories?q=",

		// Keywords
		encode(keywords),

		// Language
		language ? `+language:${encode(language)}` : "",

		// Last Update
		last_update ? `+pushed:>${encode(getPrevDateFrom(last_update))}` : "",

		// Stars
		min_stars ? `+stars:>${encode(min_stars)}` : "",

		// Page
		page > 1 ? `&page=${encode(page.toString())}` : ""
	].join("");
};
