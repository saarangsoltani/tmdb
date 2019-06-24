import * as actions from "../../actions";
import { API, SET_DISCOVERED_SERIES } from "../../actions/types";

describe("actions/discover", () => {
  it("discoverSeries", () => {
    expect(actions.discoverSeries()).toMatchSnapshot();
  });

  it("setDiscoveredSeriesData", () => {
    expect(actions.setDiscoveredSeriesData("data")).toMatchSnapshot();
  });
});
