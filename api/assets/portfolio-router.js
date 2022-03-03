const router = require("express").Router();
const Portfolio = require('./portfolio-model');

router.get("/", (req, res, next) => {

    Portfolio.getPortfolio()
      .then((assets) => {
        res.json(assets);
      })
      .catch(next);

  });

router.post('/', async (req, res, next) => {

    try {
        const newPortfolio = await Portfolio.addPortfolio({
          ...req.body,
        });
        res.status(201).json(newPortfolio);
      } catch (err) {
        next(err);
      }

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

router.delete('/asset_id', async (req, res, next) => {
    
    try {
        const assetToDelete = await Portfolio.remove(req.params.asset_id);
        if (assetToDelete) {
        res.status(200).json({message: `Deleted ${assetToDelete} item.`});
        } else {
        res.status(401).json({message: `Could not locate that asset.`})
        }

      } catch (err) {
        next(err);
      }
    
})


module.exports = router; 