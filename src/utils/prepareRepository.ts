import { getTimeSince } from "./getTimeSince";

/**
 * Prepare repository returned from the GitHub API
 */
export const prepareRepository = (repository: RepositoryRaw): Repository => {
	const { owner, stargazers_count, updated_at, id } = repository;

	const description = repository.description || "";
	const name = repository.name || "";
	const language = repository.language || "";
	const license =
		repository.license && repository.license.name
			? repository.license.name.replace("License", "license")
			: "";
	const url = repository.html_url || "";
	const user = owner && owner.login ? owner.login : "";
	const stars = stargazers_count.toLocaleString() || "0";
	const updated = `${getTimeSince(new Date(updated_at))} ago` || "";

	return {
		id,
		url,
		description,
		name,
		user,
		stars,
		language,
		updated,
		license,
	};
};
