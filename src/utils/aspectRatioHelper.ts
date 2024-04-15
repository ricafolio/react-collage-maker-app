export default function calculateAspectRatio(
  widthRatio: number,
  heightRatio: number,
  wrapperWidth: number,
  wrapperHeight: number,
) {
  return {
    width: wrapperWidth,
    height: Math.min(wrapperHeight, Math.round((wrapperWidth / widthRatio) * heightRatio)),
  }
}
