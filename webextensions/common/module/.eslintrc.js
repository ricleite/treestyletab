/*eslint-env commonjs*/
/*eslint quote-props: ['error', "always"] */

'use strict';

module.exports = {
  'parserOptions': {
    'sourceType': 'module',
  },

  'rules': {
    'no-undef': ['error', {
      'typeof': true,
    }],
  },
};
