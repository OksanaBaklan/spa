# Image Spinner

## Preparation

- Run `npm install` after cloning.

## Tasks

- In the file `imageLinks.js` is an array of image links.
- Import the array into `App.js`.
- Create an `ImgItem` component for each image.
- Map through the array of image links in `App.js` and render an `ImgItem` component for each image.
- As long as the image has not finished loading, a spinner should be displayed. After the image is loaded, it will be displayed.
- Import `spinner-solid.svg` from the `images` directory into the `ImgItem` component (from [fontawesome](https://fontawesome.com/icons/spinner?s=solid&f=classic). You can also use any other image).
- Use `useState`, the synthetic event `onLoad` and CSS to hide the image or the spinner depending on the state.
- Use CSS animation with `@keyframes` to rotate the spinner.
- Style with more CSS if needed.

## How to test:

- Open the browser devtool, go to the "Network" tab.
- Select a slow connection under "throttling", e.g. "Slow 3G".
- Check the "Disable cache" box.
- Refresh the page.

## Reference image

![Reference image](./reference.png)
