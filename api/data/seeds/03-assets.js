const assets = [
    
    {
        asset_name: "Real Estate",
        asset_price: 500,
        user_id: 1,
    },
    {
        asset_name: "Stocks",
        asset_price: 200,
        user_id: 1,
    },
    {
        asset_name: "Bonds",
        asset_price: 350,
        user_id: 2,
    },
  ];
  
  exports.seed = function (knex) {
    return knex("assets").insert(assets);
  };
  
