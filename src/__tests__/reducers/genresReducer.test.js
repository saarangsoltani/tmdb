import { genresReducer } from "../../reducers/genresReducer";

let initialState = genresReducer(undefined, { type: "INIT" });

describe("reducers/genres", () => {
  it("should contain all genres", () => {
    expect(genresReducer(initialState)).toMatchSnapshot();
  });
});
