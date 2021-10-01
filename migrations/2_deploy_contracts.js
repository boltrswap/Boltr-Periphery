const BoltrRouter = artifacts.require("BoltrRouter");

const { config } = require('./migration-config');

module.exports = function (deployer, network, accounts) {
  //constructor(address _factory, address _WETH) public {
  deployer.deploy(BoltrRouter, config[network].factoryAddress, config[network].WBNBAddress);
};
