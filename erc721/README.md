# Ink Box: ERC721

This repo contains erc20 contract code along with it's UI.

`erc721` directory contains the contract code and `ui` directory contains the UI code. UI is written in next.js and react.

### Deploy erc20 contract
0. Run the command `substrate-contracts-node --dev` to start substrate contracts node.
1. Go to `erc721` directory and run `cargo-contract contract test` to ensure all the tests are running fine.
2. Run `cargo-contract contract build` to build the smart contract.
3. To deploy contract, goto: `https://contracts-ui.substrate.io/`. On the left side, click on `Add new contract`.
4. After deploying the contract, Run the UI.

##### Run the UI
Go to ui folder

- `cd ui`

Install Dependencies

- `npm i`

Run the tests

 - `npm run test`

Start next.js server

- `npm run dev`

Go to http://localhost:3000 and enter the contract address. Flip button flips the boolean value.
