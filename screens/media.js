import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// export default {
//   phone: (...args) => css`
//   @media (max-width: ${sizes.phone / 16}em) {
//     ${css(...args)}
//   }`,
//   tablet: (...args) => css`
//   @media (max-width: ${sizes.tablet / 16}em) {
//     ${css(...args)}
// }`,
//   desktop: (...args) => css`
//   @media (minmax-width: ${sizes.desktop / 16}em) {
//     ${css(...args)}
// }`
// }
