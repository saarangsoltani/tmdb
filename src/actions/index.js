import {
  API,
  SET_DISCOVERED_SERIES,
} from "./types";

export const discoverSeries = () => ({
  type: API,
  payload: {
    url: "discover/tv",
    onSuccess: setDiscoveredSeriesData
  }
});

export const setDiscoveredSeriesData = data => ({
  type: SET_DISCOVERED_SERIES,
  payload: data
});
