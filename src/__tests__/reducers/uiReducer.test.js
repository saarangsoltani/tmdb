import { uiReducer } from "../../reducers/uiReducer";
import {
  API_START,
  API_END,
  SORT_SERIES,
  FILTER_BY_GENRES
} from "../../actions/types";

let initialState = uiReducer(undefined, { type: "INIT" });

describe("reducers/ui", () => {
  it("should toggle loading state on API_START and API_END", () => {
    expect(uiReducer(initialState, { type: API_START })).toMatchSnapshot();
    expect(uiReducer(initialState, { type: API_END })).toMatchSnapshot();
  });

  it("should change the sort key on SORT_SERIES", () => {
    expect(
      uiReducer(initialState, { type: SORT_SERIES, payload: "revenue.asc" })
    ).toMatchSnapshot();
  });

  it("should change genres key on SORT_SERIES", () => {
    expect(
      uiReducer(initialState, {
        type: FILTER_BY_GENRES,
        payload: ["animation"]
      })
    ).toMatchSnapshot();
  });
});
