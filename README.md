# IMAGE GALLERY

### [**LIVE DEMO**](https://eneko-gallery.netlify.com)

This app is called **Image Gallery** and it has been thought as an exercise to develop a clone of [this mockup](https://tympanus.net/Development/GammaGallery/). The app has to have these features:

- Getting a list of images, it has to show them in a **responsive** grid. Also, this grid needs to be adding **images on chunks** asynchronously, via pagination or infinite scroll.
- When clicking on a image, this will be **expanded** covering the most it can but without breaking its aspect ratio and responsiveness.
- When expanded, **navigation controls** will be shown plus another feature to perform a **slideshow** with the loaded images. Of course, the **slideshow can be paused** and the **expanded view closed**.

This stack has been specified for the exercise:

- **React** for rendering.
- **Styled-Components** for styling.
- **Hooks** for component internal state.
- **Redux** for managing centralized state.
- **Redux-Sagas** for side-effects and ascyn actions.
- **Reselect** for accessing statae values via memoized selectors;
- **Jest + Redux-Saga-Test-Plan** for testing sagas.
- **Jest + React-Testing-Lib** for component testing.
- **Webpack** fron bundling.

As this is a _small_ app with almost all its components being presentational, **Redux could be skipped** and leverage the use of hooks + ContextApi. Moreover, we could perform all the navigation with React-Router and forget about managing indexes in the state. But as said, the **objective was to use the stack mentioned above**, as it is the one which is evaluated.

The deadline taken for this exercise has been 48h, so **prioritizing** tasks has been mandatory. Sadly, some other tasks has been put off and had been written down in the TODOs point to be approached in further iterations.

## Taken approach

The app is based in React and Redux. The main folder here is `./src`.

```JavaScript // I know it's not JS but only to mark the comments in green ;-)
IMAGE-GALLERY\SRC
├───components        // React components
│   ├───Gallery
│   ├───Grid
│   ├───LoadMore
│   ├───Navigation
│   ├───styles        // style breakpoints and theme
│   ├───Thumbnail
│   └───Title
├───store             // Redux store, sagas and selectors
└───tests             // some tests
```

### Components

Most components are connected to the store, except **Grid** and **Title**, which are merely presentational. It would be nice to follow the **Atomic Design** approach to keep a good componentization but time was on the essence, and I chose to have an MVP and refactor it later.

If I would have to choose between all the components, I would remark these, because they **make use of hooks and Redux** to perform effectively:

- **LoadMore**. A component using the _intersectionObserver_ and the one in charge of the **infinite-scroll**. Once it detects it has entered the layout, it will **launch the logic to perform a request** to load another chunk of images. For older browser that don't support the intersectionObserver, it will render a button for the user to click it and request images.
- **Navigation**. It is the component showing the image in a larger scale, with navigation controls and slideshow option. Due to lack of time, I have not been able to build it as clean as I wanted so it has ended being quite a big component which would need some componentization. It **combines props from Redux, hooks for controlling the internal state and the slideshow plus some complex-er styling**.

### Store

```JavaScript
IMAGE-GALLERY\SRC\STORE
├── actions.js
├── fetchImagesSaga.js  // saga for fetching images
├── reducer.js
├── selectors.js
└── store.js            // initializes the store
```

Here lays the store with its main logic. It has the usual actions + reducers. Only a couple of peculiarities:

- **FetchImagesSaga**. This saga is used to fetch images from the API. It will build the enpoint based on environment variables and, after getting the new chunk, it will _dispatch_ and action to store them in the state.
- **Selectors**. I always use selectors for accessing values from the state directly, mainly for reusability. These here, have been built up using **Reselect**, which brings us the ability to **compose selectors** with another selectors, and also it **memoizes** them putting a simple cache layer in front, not to calculate the same value two times in a row.

### Tests

```JavaScript
IMAGE-GALLERY\SRC\TESTS
├── fetchImagesSaga.spec.js  // jest + redux-saga-test-plan
└── Navigation.spec.js       // jest + react-testing-library
```

As I firmly believe in the value of tests, I wanted to introduce some testing to the project. Sadly, 48h are not a big deal so I haven't have the time to test the app propperly but I have written these two testcases as an example. I chose to test a Saga and a React Component because I thought that they are the most different from a regular JavaScript test and request another effort of abstraction to think about the way of testing them.

- I chose **redux-saga-test-plan** because I believe testing sagas is **harder** than the usual JavaScript functions and, despite being this the one I have the most experience for testing sagas, this library gives a quite **straightforward and understandable API** once the basics are understood.
- For components, **react-testing-library** has become the **standard over Enzyme**. Whilst Enzyme was about testing the code inside the component, react-testing-lib **cares about testing the component the way the user would interact with it**. Being this more appropriate for a frontend logic.

## How to install and run locally

You can play with it in the [live demo](https://eneko-gallery.netlify.app) but if you wan to run it locally, these are the needed steps. This app has been developed with `node v10.15.0` and `yarn v1.19.1`, so take them into consideration when running this project.

1. Clone the project.
   ```
   git clone https://github.com/enekobi/image-gallery.git
   ```
2. Go to project folder and install the dependencies.
   ```
   yarn install
   ```
3. Start the development build + the server

   ```
   yarn start
   ```

   If everything goes fine, the console will prompt you this message and you'll be able to access the app in http://localhost:3000

   ```
   Compiled successfully!

   You can now view image-gallery in the browser.

   Local:            http://localhost:3000
   On Your Network:  http://10.0.75.1:3000

   Note that the development build is not optimized.
   To create a production build, use yarn build.
   ```

## Play with it

The app performs request to the Giphy API and will show you gifs which are trendy in the momment. To test the app you could:

- **Scroll down** to fire the **infinite-scroll**.
- **Resize** the image grid to test its **responsiveness**.
- **Click on a thumbnail** to trigger the **navigation** view.
- Also **resize** to check the **large-image responsiveness**.
- Navigate **clicking the arrows**.
  - Going next in the last image, will lead you to the first on the list and viceversa.
- **Play/Stop** a slideshow (slides will be changing each 1500ms).
- **Click** to **close** the nagivation.

## Conclusions, TODOs and future work

Developing this types of apps is fun, specially when the result is so visual and the technology stack is the one you like. As I only had 2 days to develop it, I have not been able to implement all the ideas and use all the tools I wanted, but at least I have written them down here for future work:

- I have not had the time to **divide into different components/styles** all the logic that occurs in the _Navigation.jsx_. Speccially a parametrized Button component for the controls, close, slider,...
- The **images request maybe could be improved** to request less data. The giphy api give us a lot of options so maybe we could ask for lighter images on the grid to **improve loading times**, specially on mobile networks.
- As this project has been scafolded with Create-React-App, there is probably some unused logic and files that could be **cleaned**.
- As we use Styled-Components for styling, **Postcss dependency has been removed**. I would check a bit deeper all the effects to see the CSS is the most optimized we can.
- The **theme and the styled-system** could more and better used.
- **SEO** could be improved with **React-Helmet**.
- Some **typechecking** could be introduced, specially for props, using React-PropTypes or even TypeScript.
- **Stop scroll** and infinite-scroll when on navigation view.
- The **import paths are quite long and verbose**. I would introduce path-aliases and index.js entrypoint on the folders to improve these.
- Continue improving **testing**.

I think that's it. I hope you find this app interesting and if you need anything more from me, you can find me in [enekobi.eus](https://enekobi.eus).

Thanks for reading.
