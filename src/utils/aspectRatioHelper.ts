export default function calculateAspectRatio(
  widthRatio: number,
  heightRatio: number,
  wrapperWidth: number,
  wrapperHeight: number,
) {
  if (wrapperWidth / wrapperHeight >= widthRatio / heightRatio) {
    // Use container height as the reference
    return {
      height: wrapperHeight,
      width: Math.round((wrapperHeight * widthRatio) / heightRatio),
    }
  } else {
    // Use container width as the reference
    return {
      height: Math.round((wrapperWidth * heightRatio) / widthRatio),
      width: wrapperWidth,
    }
  }
}
