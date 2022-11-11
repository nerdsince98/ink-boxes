# Ink Box: Flipper

This repo contains flipper contract code along with it's UI.

`flipper` directory contains the contract code and `ui` directory contains the UI code. UI is written in next.js and react.

### Deploy flipper contract
0. Run the command `substrate-contracts-node --dev` to start substrate contracts node.
1. Go to `flipper` directory and run `cargo-contract contract test` to ensure all the tests are running fine.
2. Run `cargo-contract contract build` to build the smart contract.
3. To deploy contract, goto: `https://contracts-ui.substrate.io/`. On the left side, click on `Add new contract`.
4. After deploying the contract, Run the UI.

##### Run the UI
Go to ui folder

- `cd ui`

Install Dependencies

- `npm i`

Run the tests

 - `npm test`

Start next.js server

- `npm run dev`

Go to http://localhost:3000 and enter the contract address. Flip button flips the boolean value.
