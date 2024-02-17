import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Markers {
  lat: string;
  lng: string;
  type: string;
  body: any;
}

interface Map {
  type: string;
  specifications: any;
  filteredMarkers: Markers[];
}

const initialState: Map = {
  type: "",
  specifications: {},
  filteredMarkers: [
    {
      lat: "51.51974",
      lng: "-0.094021",
      type: "restaurant",
      body: {},
    },
    {
      lat: "51.512441",
      lng: "-0.126851",
      type: "customer",
      body: {},
    },
    {
      lat: "51.513769",
      lng: "-0.19373",
      type: "rider",
      body: {},
    },
    {
      lat: "51.564367",
      lng: "-0.13494",
      type: "hub",
      body: {},
    },
    {
      lat: "51.512984",
      lng: "-0.139728",
      type: "hub",
      body: {},
    },
  ],
};

const selectMapSlice = createSlice({
  name: "selectMap",
  initialState,
  reducers: {
    updateType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      // state.filteredMarkers = [];
    },
    filterMarkers(state) {
      state.filteredMarkers = initialState.filteredMarkers;
      state.filteredMarkers = state.filteredMarkers.filter(
        (marker) => marker.type === state.type
      );
    },
  },
});

export const { updateType, filterMarkers } = selectMapSlice.actions;
export default selectMapSlice.reducer;
