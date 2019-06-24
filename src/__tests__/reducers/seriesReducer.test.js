import { seriesReducer } from "../../reducers/seriesReducer";
import {
  SET_DISCOVERED_SERIES,
  SET_SELECTED_SERIES
} from "../../actions/types";

let initialState = seriesReducer(undefined, { type: "INIT" });

describe("reducers/series", () => {
  const discovered = {
    page: 1,
    total_results: 1,
    total_pages: 1,
    results: [{ name: "Friends" }]
  };

  it("should set discovered series to series list", () => {
    expect(
      seriesReducer(initialState, {
        type: SET_DISCOVERED_SERIES,
        payload: discovered
      })
    ).toMatchSnapshot();
  });
});
