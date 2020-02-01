/**
 * Simple function to return a date in "YYYY-MM-DD" format,
 * from a given date back a certain amount time
 */
export const getPrevDateFrom = (go_back = "last_week", from = new Date()) => {
	const date = new Date(from);

	switch (go_back) {
		case "last_week":
			date.setDate(date.getDate() - 7);
			break;

		case "last_month":
			date.setMonth(date.getMonth() - 1);
			break;

		case "last_6_months":
			date.setMonth(date.getMonth() - 6);
			break;

		case "last_year":
			date.setFullYear(date.getFullYear() - 1);
			break;

		case "last_2_years":
			date.setFullYear(date.getFullYear() - 2);
			break;

		case "last_3_years":
			date.setFullYear(date.getFullYear() - 3);
			break;

		default:
			break;
	}

	const year = date.getFullYear().toString();

	const month_raw = date.getMonth() + 1;
	const month = month_raw > 9 ? month_raw.toString() : `0${month_raw}`;

	const day_raw = date.getDate();
	const day = day_raw > 9 ? day_raw.toString() : `0${day_raw}`;

	return `${year}-${month}-${day}`;
};
