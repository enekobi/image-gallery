/* eslint-disable no-unused-vars, import/first */
jest.mock('xhr', () => ({
  get: jest.fn().mockImplementation((uri, req, cb) =>
    cb(null, {
      body: JSON.stringify({ data: 'mock-image' })
    })
  )
}));

import { expectSaga } from 'redux-saga-test-plan';
import { fetchImagesSaga, doRequest } from '../store/fetchImagesSaga';
import { FETCH_IMAGES, fetchImages, storeImages } from '../store/actions';
import { getTotalImages } from '../store/selectors';
import { select } from 'redux-saga/effects';

const MOCK_TOTAL_IMAGES = 10;
const MOCK_API_URL = 'mock-api';
const MOCK_API_KEY = 'mock-key';
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;

describe('fetchImageSaga', () => {
  let expectedSaga;

  beforeAll(() => {
    // TODO check if these can be set in a config file
    delete process.env.REACT_APP_API_URL;
    delete process.env.REACT_APP_API_KEY;

    process.env.REACT_APP_API_URL = MOCK_API_URL;
    process.env.REACT_APP_API_KEY = MOCK_API_KEY;
  });

  afterAll(() => {
    process.env.REACT_APP_API_URL = REACT_APP_API_URL;
    process.env.REACT_APP_API_KEY = REACT_APP_API_KEY;
  });

  beforeEach(() => {
    expectedSaga = expectSaga(fetchImagesSaga).provide([
      [select(getTotalImages), MOCK_TOTAL_IMAGES]
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('starts listening to FETCH_IMAGES', () => {
    return expectedSaga.take(FETCH_IMAGES).silentRun();
  });

  describe('After taking FETCH_IMAGES', () => {
    beforeEach(() => {
      expectedSaga.dispatch(fetchImages());
    });

    test('gets total images from state', () => {
      return expectedSaga.select(getTotalImages).silentRun();
    });

    test('call api endpoint with query params', () => {
      return expectedSaga
        .call(
          doRequest,
          `${MOCK_API_URL}?api_key=${MOCK_API_KEY}&offset=${MOCK_TOTAL_IMAGES}&limit=20`
        )
        .silentRun();
    });

    test('dispatches the data to the store', () => {
      return expectedSaga.put(storeImages('mock-image')).silentRun();
    });
  });
});
