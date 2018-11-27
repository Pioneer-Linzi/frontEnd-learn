const common = (state = [], action:any) => {
    switch (action.type) {
        case 'changeProcess':
            return []
        default:
            return state
    }
}
export default common;
