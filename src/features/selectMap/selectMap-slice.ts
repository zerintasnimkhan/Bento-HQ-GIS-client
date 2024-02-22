import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
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
    // {
    //   lat: "51.51974",
    //   lng: "-0.094021",
    //   type: "restaurant",
    //   body: {},
    // },
    // {
    //   lat: "51.512441",
    //   lng: "-0.126851",
    //   type: "customer",
    //   body: {},
    // },
    // {
    //   lat: "51.513769",
    //   lng: "-0.19373",
    //   type: "rider",
    //   body: {},
    // },
    // {
    //   lat: "51.564367",
    //   lng: "-0.13494",
    //   type: "hub",
    //   body: {},
    // },
    // {
    //   lat: "51.512984",
    //   lng: "-0.139728",
    //   type: "hub",
    //   body: {},
    // },
  ],
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
      console.log(mappedRestaurantData);

      // const hubResponse = await fetch(
      //   "https://sak-skeleton-samiya-kazi.koyeb.app/utilization/current/all/?delivery=true"
      // );
      // const hubData = await hubResponse.json();
      // const mappedHubData = hubData.data.map((hub) => ({
      //   lat: hub.currentLatLong.latitude,
      //   lng: hub.currentLatLong.longitude,
      //   type: "hub",
      //   body: {},
      // }));

      return mappedCustomerData.concat(
        mappedRestaurantData, mappedRiderData
        
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
    },
    filterMarkers(state) {
      state.filteredMarkers = state.filteredMarkers.filter(
        (marker) => marker.type === state.type
      );
      console.log("change type to", state.type);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkersFromJson.fulfilled, (state, action) => {
      state.filteredMarkers = action.payload;
    });
  },
});

export const { updateType, filterMarkers } = selectMapSlice.actions;
export default selectMapSlice.reducer;
