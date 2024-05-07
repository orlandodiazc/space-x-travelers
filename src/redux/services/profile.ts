import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Info {
  id: string;
  name: string;
}

interface ProfileState {
  reservedRockets: Info[];
  reservedMissions: Info[];
}
const localProfile = localStorage.getItem("profile");
const initialState: ProfileState = localProfile
  ? JSON.parse(localProfile)
  : {
      reservedRockets: [],
      reservedMissions: [],
    };

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleRocketReservation: (
      { reservedRockets },
      action: PayloadAction<Info>,
    ) => {
      const index = reservedRockets.findIndex(
        (rocket) => rocket.id === action.payload.id,
      );
      if (index !== -1) {
        reservedRockets.splice(index, 1);
      } else {
        reservedRockets.push(action.payload);
      }
    },
    toggleMissionReservation: (
      { reservedMissions },
      action: PayloadAction<Info>,
    ) => {
      const index = reservedMissions.findIndex(
        (mission) => mission.id === action.payload.id,
      );
      if (index !== -1) {
        reservedMissions.splice(index, 1);
      } else {
        reservedMissions.push(action.payload);
      }
    },
  },
});

export const { toggleMissionReservation, toggleRocketReservation } =
  profileSlice.actions;

export default profileSlice.reducer;
