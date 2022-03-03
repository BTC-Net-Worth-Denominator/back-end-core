const db = require("../data/db-config");

function getPortfolio() {
    return db('portfolio')
}

async function addPortfolio (portfolio) {

    const [newPortfolio] = await db("portfolio").insert(portfolio, [
        "asset_name",
        "asset_value",
        "asset_id",
      ]);
      return newPortfolio;
}

function getById(id) {
    return db("portfolio").where("asset_id", id).first();
  }

function remove(asset_id) {
    return db('portfolio').where({ asset_id }).del();
}

module.exports = {

    getPortfolio,
    addPortfolio,
    getById,
    remove,

}