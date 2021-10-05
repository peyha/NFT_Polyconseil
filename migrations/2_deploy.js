// migrations/2_deploy.js
// SPDX-License-Identifier: MIT


const ERC721PresetMinterPauserAutoId = artifacts.require("ERC721PresetMinterPauserAutoId");

module.exports = function(deployer) {
  //name, symbol, baseURI
  deployer.deploy(ERC721PresetMinterPauserAutoId, "Peyha's NFT","PA", "https://my-json-server.typicode.com/abcoathup/samplenft/tokens/");
};