import React, { FunctionComponent, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getMinStars, updateMinStars } from "@/redux";

/**
 * MinStars component
 */
export const MinStars: FunctionComponent = () => {
	const min_stars = useSelector<State, StateUi["min_stars"]>(state =>
		getMinStars(state)
	);

	const { current: values } = useRef(
		[10, 100, 1000, 10000, 50000, 100000].map(value => ({
			value,
			label: value.toLocaleString(),
		}))
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

				{values.map(({ value, label }) => (
					<option key={label} value={value}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};
