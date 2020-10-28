export default (state = [], action: any) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return [...state, ...action.payload];
        default:
            return state;
    }
}