import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    onlineUsers: 0
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.user.push({ name: 'Serkan', age: 39 })
        },

        logout(state) {
            state.user = []
        },

    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer