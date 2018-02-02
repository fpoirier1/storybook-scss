import { configure } from '@storybook/react';

import '../../../../../themes/custom/gw/scss/style.scss';

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);