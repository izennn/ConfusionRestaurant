import React from 'react';

import { DISHES } from '../shared/dishes';
import { COMMENTS} from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
	dishes: DISHES,
	comments: COMMENTS,
	promotions: PROMOTIONS,
	leaders: LEADERS
}

// create reducer function, pure function (does not change state in any way)
// state = initialState   *** when application is started, initialize state to initialState
// when Reducer is first called by store, state is unitialized. If state is undefined, it becomes assigned to initialState
export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		default: 
			return state;
	}
}