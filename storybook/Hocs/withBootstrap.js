import React from 'react'
export default WrappedComponent =>
  class withBootstrap extends React.Component {
    render() {
      const { children, ...props } = this.props

      return (
        <div>
          <link rel="stylesheet" type="text/css" href="/static/css/normalize.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/fontAwesome.all.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/react-select.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/date-picker.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/bootstrap2-toggle.css" />

          <WrappedComponent {...props} />
        </div>
      )
    }
  }

// {/* <link
//   rel="stylesheet"
//   href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
// />
// <link
//   rel="stylesheet"
//   href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
// /> */}
// {/* <link href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" rel="stylesheet" /> */}
