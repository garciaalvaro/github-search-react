import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMinStars, updateMinStars } from "../../redux";

/**
 * MinStars component
 */
export const MinStars: FunctionComponent = () => {
	const min_stars = useSelector<State, StateUi["min_stars"]>(state =>
		getMinStars(state)
	);

	const dispatch = useDispatch();

	return (
		<div className="container container--content-column">
			<label htmlFor="stars">Minimum stars</label>

			<select
				value={min_stars || ""}
				onChange={e =>
					dispatch(updateMinStars(e.target.value as MinStars))
				}
				id="stars"
				name="stars"
			>
				<option value="">Any amount</option>
				<option value="10">{(10).toLocaleString()}</option>
				<option value="100">{(100).toLocaleString()}</option>
				<option value="1000">{(1000).toLocaleString()}</option>
				<option value="10000">{(10000).toLocaleString()}</option>
				<option value="50000">{(50000).toLocaleString()}</option>
				<option value="100000">{(100000).toLocaleString()}</option>
			</select>
		</div>
	);
};
