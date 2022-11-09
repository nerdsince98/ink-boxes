import type { NextPage } from 'next'
import { useState } from 'react';
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import abiData from '../abi/erc20-contract-abi'
import totalSupplyQuery from '../core/total-supply-query';
import balanceOfQuery from '../core/balance-of-query';
import approveQuery from '../core/approve-query';

const WS_PROVIDER = 'ws://127.0.0.1:9944'
const gasLimit = 1000000000001;
const storageDepositLimit = null;

const Home: NextPage = () => {
  const [address, setAddress] = useState('');
  const [addressSubmitted, setAddressSubmitted] = useState(false);

  const totalSupply = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .totalSupply({ storageDepositLimit, gasLimit })
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await totalSupplyQuery(contract, alice.address);
  }

  const balanceOf = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const inputAddress = (document.getElementById('balanceOf') as HTMLInputElement).value;

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .balanceOf({ storageDepositLimit, gasLimit }, inputAddress)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

      await balanceOfQuery(contract, inputAddress);
  }

  const approve = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const approveAddress = (document.getElementById('approveAddress') as HTMLInputElement).value;

    const approveAmount = (document.getElementById('approveAmount') as HTMLInputElement).value;

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .approve({ storageDepositLimit, gasLimit, }, approveAddress, approveAmount)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await approveQuery(contract, approveAddress, approveAmount);
  }

  const transfer = async () => {}


  return (
    <div className={styles.container}>
      <Head>
        <title>ERC20 Contract</title>
        <meta name="description" content="ERC20 Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {addressSubmitted ? <>
          <h3 className={styles.title}>
            ERC20 Contract
          </h3>

          <button onClick={totalSupply}>total supply</button>

          <button onClick={balanceOf}>Balance Of</button>

          <input id='balanceOf' placeholder='enter address here'></input>

          <button onClick={approve}>Approve</button>

          <input id='approveAddress' placeholder='enter address here'></input>

          <input id='approveAmount' placeholder='enter amount here'></input>

          <h4 id='output'></h4>
        </> :
          <>
            <h3 className={styles.title}>
              Provide Contract Address
            </h3>
            <div className={styles.address}>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <button onClick={e => setAddressSubmitted(true)}>Set</button>
            </div>
          </>}
      </main>
    </div>
  )
}

export default Home

// 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY