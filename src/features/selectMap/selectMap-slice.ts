import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
interface Markers {
  lat: string;
  lng: string;
  type: string;
  body: any;
  level: string;
}

interface Map {
  type: string;
  specifications: any;
  allMarkers: Markers[];
  filteredMarkers: Markers[];
  selectedLevels: string[];
}

const initialState: Map = {
  type: "",
  specifications: {},
  allMarkers: [],
  filteredMarkers: [],
  selectedLevels: [],
};

export const fetchMarkersFromJson = createAsyncThunk(
  "selectMap/fetchMarkersFromJson",
  async () => {
    try {
      const customerResponse = await fetch("/markersData/customers.json");
      const customerData = await customerResponse.json();
      const mappedCustomerData = customerData.data.map((customer) => ({
        lat: customer.currentLatLong.latitude,
        lng: customer.currentLatLong.longitude,
        type: "customer",

        body: {},
      }));

      const riderResponse = await fetch(
        "https://bento-rider.onrender.com/rider/all"
      );
      const riderData = await riderResponse.json();
      const mappedRiderData = riderData.riders.map((rider) => ({
        lat: rider.currentLatLong.latitude,
        lng: rider.currentLatLong.longitude,
        type: "rider",
        body: {},
      }));

      const restaurantResponse = await fetch(
        "https://sak-skeleton-samiya-kazi.koyeb.app/utilization/current/all/?delivery=true"
      );
      const restaurantData = await restaurantResponse.json();
      const mappedRestaurantData = restaurantData.data.map((restaurant) => ({
        lat: restaurant.restaurantLatitude,
        lng: restaurant.restaurantLongitude,
        type: "restaurant",
        body: {},
      }));

      const hubResponse = await fetch(
        "https://bento-rider.onrender.com/hub/get-all-hubs"
      );
      const hubData = await hubResponse.json();
      const mappedHubData = hubData.map((hub) => ({
        lat: hub.center[1],
        lng: hub.center[0],
        type: "hub",
        body: {},
      }));

      return mappedCustomerData.concat(
        mappedRestaurantData,
        mappedRiderData,
        mappedHubData
      );
    } catch (error) {
      console.error("Error fetching data from JSON file:", error);
      throw error;
    }
  }
);

const selectMapSlice = createSlice({
  name: "selectMap",
  initialState,
  reducers: {
    updateType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.filteredMarkers = [];
    },
    filterMarkers(state) {
      state.filteredMarkers = state.allMarkers.filter((marker) => {
        // Check if 'type' and 'level' match
        return (
          marker.type === state.type &&
          (state.selectedLevels.length === 0 ||
            state.selectedLevels.includes(marker.level))
        );
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkersFromJson.fulfilled, (state, action) => {
      state.allMarkers = action.payload;
    });
  },
});

export const { updateType, filterMarkers } = selectMapSlice.actions;
export default selectMapSlice.reducer;
