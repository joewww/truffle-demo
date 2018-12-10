var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "YOUR MNEMONIC HERE";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  
  networks: {
    rinkeby: {
      provider: function() { 
      return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/APIKEY');
    },
    network_id: '4',
    gas: 4500000,
    gasPrice: 10000000000
    }
  }
};
