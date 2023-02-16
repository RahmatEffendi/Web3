// https://eth-goerli.g.alchemy.com/v2/JHG63qgz69-0VSzTm9yXqNZzx_XPTwjw

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JHG63qgz69-0VSzTm9yXqNZzx_XPTwjw',
      accounts: [ 'fd7eac07959c9f5064c15faf88c708205ddba2337cd0652bb85ce4808cbb845b' ]
    }
  }
};
