const HDWalletProvider = require("@truffle/hdwallet-provider");
const provider = new HDWalletProvider({
	privateKeys: [""],
	providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545"
	
});
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   testnet: {
    provider: () => provider,
    network_id: 97,
    gas: 5000000,
    gasPrice: 50000000000,  // 1 gwei (in wei)
    confirmations: 1,
    networkCheckTimeout: 1000000,
    timeoutBlocks: 50000,
    skipDryRun: true
   },
   mainnet: {
    provider: () => provider,
    network_id: 56,
    gas: 5000000,
    gasPrice: 50000000000,  // 5 gwei (in wei)
    confirmations: 1,
    networkCheckTimeout: 1000000,
    timeoutBlocks: 50000,
    skipDryRun: true
   }
  }, 
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '9T1USEHMVWUDN9DPZHNP8TJ6GG38Z8R7EY'
  },  
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        }
      }
    }
  }
};
