const common = (state = [], action:any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return []
        case 'TOGGLE_TODO':
            return ;
        default:
            return state
    }
}
export default common;
