import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getLastUpdate, updateLastUpdate } from "../../redux";

/**
 * LastUpdate component
 */
export const LastUpdate: FunctionComponent = () => {
	const last_update = useSelector<State, StateUi["last_update"]>(state =>
		getLastUpdate(state)
	);

	const dispatch = useDispatch();

	return (
		<div className="container container--content-column">
			<label htmlFor="last_update">Last update</label>

			<select
				value={last_update || ""}
				onChange={e =>
					dispatch(updateLastUpdate(e.target.value as LastUpdate))
				}
				id="last_update"
				name="last_update"
			>
				<option value="">Any time</option>
				<option value="last_week">Last week</option>
				<option value="last_month">Last month</option>
				<option value="last_6_months">Last 6 months</option>
				<option value="last_year">Last year</option>
				<option value="last_2_years">Last 2 years</option>
				<option value="last_3_years">Last 3 years</option>
			</select>
		</div>
	);
};
