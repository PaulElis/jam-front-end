const actions = require('./actions');

describe('fetchTopArtists', () => {
  it('fetchTopArtists exists', () => {
    expect.assertions(1)
    return actions.fetchTopArtists().then(data => {
      console.log(data);
      expect(data.count).toBeGreaterThan(0)
    })
  })
})
