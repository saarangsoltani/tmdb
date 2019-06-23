import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import apiMiddleware from "../../middlewares/api";
import { API, API_START, API_END } from "../../actions/types";

const sampleApiResponse = { title: "hello" };
const successAction = data => ({ type: "SET_RESPONSE_DATA", payload: data });
const sampleApiAction = () => ({
  type: API,
  payload: { onSuccess: successAction, url: "fooendpoint.json" }
});
let mock;

beforeAll(() => {
  mock = new MockAdapter(axios);
  mock.onGet(/fooendpoint.json/g).reply(200, sampleApiResponse);
});

afterAll(() => mock.restore());

describe("API Middleware", () => {
  let next, dispatch, middleware;
  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    middleware = apiMiddleware({ dispatch })(next);
  });

  describe("general", () => {
    it("should ignore non-API actions", () => {
      const sampleAction = { type: "FOO_ACTION" };
      middleware(sampleAction);
      expect(dispatch.mock.calls.length).toBe(0);
      expect(next.mock.calls).toEqual([[sampleAction]]);
    });

    it("should dispatch API_START when action is API", () => {
      middleware(sampleApiAction());
      expect(dispatch.mock.calls[0]).toEqual([{ type: API_START }]);
    });
  });

  describe("on success", () => {
    it("should dispatch API_FINISHED", async () => {
      await middleware(sampleApiAction());
      expect(dispatch.mock.calls[1]).toEqual([{ type: API_END }]);
    });

    it("should dispatch success action", async () => {
      await middleware(sampleApiAction());
      expect(dispatch.mock.calls[2]).toEqual([
        successAction(sampleApiResponse)
      ]);
    });
  });
});
