import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'

export default {
  carousel: styled(Carousel)`
    min-height: 100%;
    position: static;
  `,
  carouselCaption: styled(Carousel.Caption)`
    position: static;
    margin-left: 15%;
    margin-right: 15%;
  `,
  h1: styled.h1`
    margin-top: 35px;
    text-shadow: none;
    font-weight: 700;
    font-size: 30px;
  `,
  hr: styled.hr`
    border: 1px solid #fff;
    // width: 100px;
    margin: 0 auto;
    margin-bottom: 10px;
  `,
  img: styled.img`
    padding-top: 35%;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
  `
}
