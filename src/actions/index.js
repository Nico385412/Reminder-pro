/**
 * Created by Nicolas on 06/07/2017.
 */

import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL_REMINDERS, GET_RANDOM_IMAGE} from '../constants';

export const addReminder = (text, dueDate) => {
    const action = {
         type: ADD_REMINDER,
         text,
         dueDate
    };
    console.log('action in addReminder', action);
    return action;
};

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    };
    console.log('deleteing in actions', action);
    return action;
};

export const deleteAllReminders = () => {
    const action = {
        type: DELETE_ALL_REMINDERS,
    };
    console.log('deleting all in actions', action);
    return action;
};