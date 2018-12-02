import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
// const req = require.context('../storybook/stories', true, /\.js$/)
function loadStories() {
  require('./stories.js')
  // req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
