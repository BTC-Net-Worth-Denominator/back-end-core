const router = require("express").Router();
const Assets = require("./assets-model");
const { restricted } = require('../auth/auth-middleware');

router.get("/", (req, res, next) => {
  Assets.getAssets()
    .then((assets) => {
      res.json(assets);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  try {
    const newPortfolio = await Assets.addAssets({
      ...req.body,
    });
    res.status(201).json(newPortfolio);
  } catch (err) {
    next(err);
  }
});

// PUT Endpoint -- updates specific asset based on asset_id

router.put("/:asset_id", restricted, async (req, res, next) => {
  try {
    const asset = await Assets.edit(req.params.asset_id, req.body);
    if (asset) {
      res.status(200).json({ 
        message: `Your asset ${asset.asset_name} has been updated.`
      });
    } else {
      res.status(401).json({
        message: `Asset with ID ${req.params.asset_id} does not exist.`,
      });
    }
  } catch (err) {
    next(err);
  }
});

// receiving error message: "Undefined binding(s) detected when compiling FIRST. Undefined column(s): [asset_id] query: select * from \"assets\" where \"asset_id\" = ? limit ?" from posting endpoint

router.get("/:asset_id", async (req, res, next) => {
  try {
    const asset = await Assets.getById(req.params.asset_id);
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

router.delete("/:asset_id", async (req, res, next) => {
  try {
    const assetToDelete = await Assets.remove(req.params.asset_id);
    if (assetToDelete) {
      res.status(200).json(assetToDelete);
    } else {
      res.status(401).json({ message: `Could not locate specific asset.` });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
