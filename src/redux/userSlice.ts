import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppUser {
  uid: string;
  email: string | null; // null for guest logins
  displayName: string | null; // null unless set (Google login fills this)
  isAnonymous: boolean;
}

interface UserState {
  user: AppUser | null;
  loading: boolean;
}

const initialState: UserState = {
    user: null,
    loading: true
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AppUser | null>) => {
            state.user = action.payload;
            state.loading = false;
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;