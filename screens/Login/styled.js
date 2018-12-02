import styled, { createGlobalStyle } from 'styled-components'
import media from 'screens/media'
import { Col, Row, Button } from 'react-bootstrap'

export default {
  noScroll: createGlobalStyle`
    body {
      overflow-y:hidden
    }
  `,
  background: styled.div`
    background-image: url('/static/images/bglogin.jpg');
    // position: relative;
    background-repeat: no-repeat;
    // display: flex;
    // height: 50%;
  `,

  panelBackground: styled(Row)`
    margin: 0 auto 20px auto;
    // margin-top: auto;
    // margin/-bottom: auto;
    // position: relative;
    position: absolute;
    box-shadow: 0px 5px 24px rgba(0, 0, 0, 0.3);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffff;
    width: 80%;
  `,

  Image: styled(Col)`
    background-position: 'center';
    background-image: url(/static/images/login.jpg);
    height: 655px;
    min-height: 125px;
    margin-left: 0;
    margin-right: 0;
    ${media.desktop`
      display: none;
    `}
  `,
  credentialPanel: styled(Col)`
    padding: 50px;
    height: 655px;
    & > form-control {
      height: 44px;
    }
    ${media.tablet`margin-top: 75px;
    height: 480px;`}
  `,
  form: styled.form`
    padding-top: 75px;
    ${media.tablet`padding-top: 0px;`}
  `,
  Heading: styled.h3`
    text-align: left;
    font-size: 32px;
    color: #3f3f3f;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    line-height: 32px;
    margin: 21px 0px 30px 0px;
  `,
  loginBtn: styled(Button)`
    margin-top: 20px;
    width: 100%;
    height: 42px;
    margin: 0;
  `,
  forgetPassword: styled.div`
    color: #3f9d4b;
    text-align: center;
    padding: 20px 0;
    > a {
      color: #3f9d4b;
      font-weight: 500;
      font-size: 16px;
      text-decoration: underline;
    }
  `,
  copyright: styled.div`
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    bottom: 45px;
    text-align: center;
    width: 100%;
    left: 0;
  `
}
