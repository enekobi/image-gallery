import { takeLatest, put, call, select } from 'redux-saga/effects';
import xhr from 'xhr';
import { FETCH_IMAGES, storeImages } from './actions';
import { getTotalImages } from './selectors';

const buildEndpoint = (offset = 0, limit = 20) => {
  const baseUri = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  return `${baseUri}?api_key=${apiKey}&offset=${offset}&limit=${limit}`;
};

export const doRequest = async (endpoint) => {
  // Cant use fetchAPI because of IE11 support ¬¬!
  const request = {
    useXDR: true,
    timeout: 1500
  };

  return await new Promise((resolve, reject) =>
    xhr.get(endpoint, request, (err, res) => (err ? reject(err) : resolve(res.body)))
  );
};

function* requestImages() {
  const currentOffset = yield select(getTotalImages);
  const endpoint = buildEndpoint(currentOffset);
  const rawData = yield call(doRequest, endpoint);
  const images = JSON.parse(rawData);
  yield put(storeImages(images.data));
}

export function* fetchImagesSaga() {
  yield takeLatest(FETCH_IMAGES, requestImages);
}
