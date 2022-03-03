const db = require("../data/db-config");

function getAssets() {
    return db('assets')
}

async function addAssets (assets) {

    const [newAssets] = await db("assets").insert(assets, [
        "asset_name",
        "asset_value",
        "asset_id",
      ]);
      return newAssets;
}

function getById(id) {
    return db("assets").where("asset_id", id).first();
  }

function remove(asset_id) {
    return db('assets').where({ asset_id }).del();
}

module.exports = {

    getAssets,
    addAssets,
    getById,
    remove,

}