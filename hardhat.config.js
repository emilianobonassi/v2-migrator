require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const { ffmnemonic, alchemyProjectId, etherscanKey, infuraProjectId } = require("./secrets.json"); 

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.12",

  networks: {
    // mainnet: {
    //   url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyProjectId}`,
    //   gasPrice: 35000000000,
    //   gas: 2700000,
    //   accounts: { mnemonic: ffmnemonic }
    // },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyProjectId}`,
        blockNumber: 11432885
      }
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${infuraProjectId}`,
      accounts: { mnemonic: ffmnemonic }
    }
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: etherscanKey
  }
};
