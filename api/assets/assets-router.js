const router = require("express").Router();
const Assets = require('./assets-model');

router.get("/", (req, res, next) => {

    Assets.getAssets()
      .then((assets) => {
        res.json(assets);
      })
      .catch(next);

  });

router.post('/', async (req, res, next) => {

    try {
        const newPortfolio = await Assets.addAssets({
          ...req.body,
        });
        res.status(201).json(newPortfolio);
      } catch (err) {
        next(err);
      }

})

router.get("/:asset_id", async (req, res, next) => {

    try {
        const asset = await Assets.getById(req.asset_id);
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
        const assetToDelete = await Assets.remove(req.params.asset_id);
        if (assetToDelete) {
        res.status(200).json({message: `Deleted ${assetToDelete} item.`});
        } else {
        res.status(401).json({message: `Could not locate specific asset.`})
        }

      } catch (err) {
        next(err);
      }
    
})


module.exports = router; 