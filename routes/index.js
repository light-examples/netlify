const { light, Route } = require('light');

class Index extends Route {
  async handler() {
    return {
      hello: 'world',
      this: 'is hosted on netlify',
    };
  }
}

module.exports = light(Index);
