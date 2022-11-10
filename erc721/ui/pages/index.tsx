import type { NextPage } from 'next'
import { useState } from 'react';
import { ApiPromise, Keyring, WsProvider } from '@polkadot/api'
import { Abi, ContractPromise } from '@polkadot/api-contract'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import abiData from '../abi/erc721-contract-abi'
import balanceOfQuery from '../core/balance-of-query';
import approveQuery from '../core/approve-query';
import transferQuery from '../core/transfer-query';
import mintQuery from '../core/mint-query';

const WS_PROVIDER = 'ws://127.0.0.1:9944'
const gasLimit = 1000000000001;
const storageDepositLimit = null;

const Home: NextPage = () => {
  const [address, setAddress] = useState('');
  const [addressSubmitted, setAddressSubmitted] = useState(false);

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

    const approveTokenId = parseInt((document.getElementById('approveTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .approve({ storageDepositLimit, gasLimit, }, approveAddress, approveTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await approveQuery(contract, approveAddress, approveTokenId);
  }

  const transfer = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const transferAddress = (document.getElementById('transferAddress') as HTMLInputElement).value;

    const transferTokenId = parseInt((document.getElementById('transferTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .transfer({ storageDepositLimit, gasLimit, }, transferAddress, transferTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await transferQuery(contract, transferAddress, transferTokenId);
  }

  const mint = async () => {
    const provider = new WsProvider(WS_PROVIDER);
    const api = new ApiPromise({ provider });

    await api.isReady;

    const keyring = new Keyring({ type: 'sr25519' });

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    console.log('API is ready');

    const abi = new Abi(abiData, api.registry.getChainProperties());

    const contract = new ContractPromise(api, abi, address);

    const mintTokenId = parseInt((document.getElementById('mintTokenId') as HTMLInputElement).value);

    // Send the transaction, like elsewhere this is a normal extrinsic
    // with the same rules as applied in the API (As with the read example,
    // additional params, if required can follow)
    await contract.tx
      .mint({ storageDepositLimit, gasLimit, }, mintTokenId)
      .signAndSend(alice, async (res) => {
        if (res.status.isInBlock) {
          console.log('in a block');
        } else if (res.status.isFinalized) {
          console.log('finalized');
        }
      });

    await mintQuery(contract, address, mintTokenId);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>ERC721 Contract</title>
        <meta name="description" content="ERC721 Contract" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {addressSubmitted ? <>
          <h3 className={styles.title}>
            ERC721 Contract
          </h3>

          <button onClick={balanceOf}>Balance Of</button>

          <input id='balanceOf' placeholder='enter address here'></input>

          <button onClick={approve}>Approve</button>

          <input id='approveAddress' placeholder='enter address here'></input>

          <input id='approveTokenId' placeholder='enter token ID here'></input>

          <button onClick={transfer}>Transfer</button>

          <input id='transferAddress' placeholder='enter address here'></input>

          <input id='transferTokenId' placeholder='enter token ID here'></input>

          <button onClick={mint}>Mint</button>

          <input id='mintTokenId' placeholder='enter token ID here'></input>

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
