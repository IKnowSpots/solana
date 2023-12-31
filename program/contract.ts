import * as anchor from '@coral-xyz/anchor';
import type NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
import * as spl from '@solana/spl-token';

import type { Iknowspots } from './program';
import { IDL } from './program';

const PROGRAM_ID = "GFdi1BHL6qCJbcozApdfegbHRPiXKrC4gxpRuqsaduZv";

const RPC_URL = "https://api.devnet.solana.com/";

export const connection = new anchor.web3.Connection(RPC_URL, 'confirmed');

export const getProvider = (wallet: anchor.Wallet) => {
    const opts = {
      preflightCommitment: 'processed' as anchor.web3.ConfirmOptions,
    };
  
    const provider = new anchor.AnchorProvider(
      connection,
      wallet,
      opts.preflightCommitment
    );
    return provider;
  };

  export const anchorProgram = (wallet: anchor.Wallet) => {
    const provider = getProvider(wallet);
    const idl = IDL as anchor.Idl;
    const program = new anchor.Program(
      idl,
      PROGRAM_ID,
      provider
    ) as unknown as anchor.Program<Iknowspots>;
  
    return program;
  };