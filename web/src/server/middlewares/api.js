module.exports = function setup(app) {

  app.post('/api/getResultTable', async (req, res) => {
    const getResultTable = require('./requests/getResultTable');
    const data = await getResultTable(req, res);
    res.send(data);
  });
};
