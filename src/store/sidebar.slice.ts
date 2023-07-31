import { createSlice } from "@reduxjs/toolkit"

interface ISidebarState {
    closed: boolean
}

// inital state
const initialState: ISidebarState = {
    closed: false
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.closed = false
        },
        closeSidebar: (state) => {
            state.closed = true
        }
    }
})

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
// // state type
// export type TSidebarState = {
//     closed: boolean
// }

// // action type
// export type TSidebarAction = {
//     type: string,
// }

// // dispatch type
// type DispatchType = (args: TSidebarAction) => TSidebarAction;

// // actions
// export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
// export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

// /**
//  * Actions
//  */
// export const openSidebar = () => (dispatch: DispatchType) => {
//     dispatch({ type: OPEN_SIDEBAR });
// }

// export const closeSidebar = () => (dispatch: DispatchType) => {
//     dispatch({ type: CLOSE_SIDEBAR });
// }



// // reducer
// const SidebarReducer = (state: TSidebarState = initialState, action: TSidebarAction): TSidebarState => {
//     switch (action.type) {
//         case OPEN_SIDEBAR:
//             return {
//                 ...state,
//                 closed: true
//             }
//         case CLOSE_SIDEBAR:
//             return {
//                 ...state,
//                 closed: false
//             }
//     }
//     return state;
// }

// export default SidebarReducer;