/* eslint-disable */
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_IMAGES, storeImages } from './actions';
import xhr from 'xhr';

const buildEndpoint = ({ offset = 0, limit = 15 }) => {
  const baseUri = 'https://api.giphy.com/v1/gifs/trending';
  const apiKey = process.env.REACT_APP_API_KEY;
  return `${baseUri}?api_key=${apiKey}&offset=${offset}&limit=${limit}`;
};

const doRequest = async (endpoint) => {
  // Cant use fetchAPI because of IE11 support
  const request = {
    useXDR: true,
    timeout: 1500
  };

  return await new Promise((resolve, reject) =>
    xhr.get(endpoint, request, (err, res) => (err ? reject(err) : resolve(res.body)))
  );
};

function* requestImages() {
  const currentOffset = 0; // TODO get state.images.length
  const endpoint = buildEndpoint(currentOffset);
  const rawData = yield call(doRequest, endpoint);
  const images = JSON.parse(rawData);
  yield put(storeImages(images.data));
}

export function* fetchImages() {
  yield takeLatest(FETCH_IMAGES, requestImages);
}
