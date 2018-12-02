// import css    'styled-jsx/css'
import styled from 'styled-components'

// export const styles = css`
//   .loginCrediantsForm .form-control {
//     height: 44px;
//   }

//   .loginBtn {
//     width: 100% !important;
//     margin-left: 0.5%;
//   }
//   .gridFrame {
//     margin-right: -27px !important;
//     margin-left: -27px !important;
//     margin-bottom: 0px;
//   }
//   .labelText {
//     max-width: 100%;
//     margin-bottom: 5px;
//     font-weight: 700;
//     text-align: left;
//   }
//   .paraAlign {
//     color: #a94442;
//   }
// `

export const styleComponent = {
  loginFormBackground: styled.div`
    float: none !important;
    margin: 0 auto 20px auto;
    position: absolute !important;
    box-shadow: 0px 5px 24px rgba(0, 0, 0, 0.3);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  loginBackground: styled.div`
    // background-size: 100%;
    background-repeat: no-repeat;
    width: 50% !important;
    position: relative;
    padding-left: 0px !important;
    padding-right: 0px !important;
    height: 100%;
    background-image: url(/static/images/login.jpg);
    min-height: 655px !important;
  `,
  loginFormBg: styled.div`
    min-height: 655px !important;
    background: #ffff;
    @media screen and (max-width: 767px) and (min-width: 320px) {
       {
        min-height: 535px !important;
      }
    }
  `,
  loginCredential: styled.div`
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 420px;
    @media screen and (max-width: 767px) and (min-width: 320px) {
       {
        margin-top: 75px;
      }
    }
  `,
  loginHeading: styled.h3`
    text-align: left;
    font-size: 32px;
    color: #3f3f3f;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    line-height: 32px;
    margin: 21px 0px 30px 0px;
  `,
  buttonStyle: styled.div`
    padding-top: 20px;
    //margin-left: -17px;
  `,
  loginbtn: styled.button`
    width: 100%;
    height: 42px;
    margin: 0;
  `,
  forgetPassword: styled.div`
    color: #3f9d4b;
    text-align: center;
    padding: 20px 0;
    > a {
      color: #3f9d4b !important;
      font-weight: 500 !important;
      font-size: 16px !important;
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
