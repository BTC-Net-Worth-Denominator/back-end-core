const db = require("../data/db-config");

function getAssets() {
  return db("assets");
}

async function addAssets(assets) {
  const [newAssets] = await db("assets").insert(assets, [
    "asset_name",
    "asset_price",
    "user_id",
  ]);
  return newAssets;
}

async function getById(id) {
  const asset = await db("assets").where("asset_id", id).first();
  return asset;
}

async function remove(asset_id) {
  return await db("assets")
    .where({ asset_id: asset_id })
    .del(["asset_id", "asset_name", "asset_price"]);
}

module.exports = {
  getAssets,
  addAssets,
  getById,
  remove,
};
