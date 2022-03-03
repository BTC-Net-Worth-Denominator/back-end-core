const router = require("express").Router();
const Portfolio = require('./portfolio-model');

router.get("/", (req, res, next) => {

    Portfolio.getPortfolio()
      .then((assets) => {
        res.json(assets);
      })
      .catch(next);
  });

router.post('/', (req, res, next) => {

    // Portfolio.addPortfolio()
    // .then(() => {

    // })
    // .catch(next)
})

router.get("/:asset_id", async (req, res, next) => {

    try {
        const asset = await Portfolio.getById(req.asset_id);
        if (asset) {
          res.status(200).json(asset);
        } else {
          res.status(401).json({
            message: `Asset with ID ${req.asset_id} does not exist.`,
          });
        }
      } catch (err) {
        next(err);
      }

});

router.delete('/asset_id', (req, res, next) => {
    
})


module.exports = router; 