import { send, assign } from '@crinkles/fsm';
import { fsmStore } from './util';

const states = {
	visible: {
		on: {
			REMOVED: 'notvisible',
			CREATED: 'visible'
		},
		entry: [
			assign((_c, values) => {
				return values;
			}),
			send('REMOVED', 6000)
		]
	},
	notvisible: {
		on: {
			CREATED: 'visible'
		}
	}
};

export const toast = fsmStore('notvisible', states);
