import { uiReducer } from "../../reducers/uiReducer";
import { API_START, API_END } from "../../actions/types";

let initialState = uiReducer(undefined, { type: "INIT" });

describe("reducers/series", () => {
  it("should toggle loading state on API_START and API_END", () => {
    expect(uiReducer(initialState, { type: API_START })).toMatchSnapshot();
  });
});
