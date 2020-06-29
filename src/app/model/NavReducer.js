import { NavActionType } from './NavActions';

export const initialState = {
    routes: [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Code',
            path: '/code'
        },
        {
            name: 'Story',
            path: '/story'
        }
    ],
    selectedIndex: 0
};

export default function reducer(state, action) {
    switch (action.type) {
        case NavActionType.Navigate:
            return {
                ...state,
                selectedIndex: action.index
            };
        case NavActionType.Reset:
        default:
            return initialState;
    }
}
