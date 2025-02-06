const { Connection, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction } = require('@solana/web3.js');
require('dotenv').config();

const RPC_URL = process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com';
const connection = new Connection(RPC_URL);

const snipeToken = async (tokenDetails) => {
  try {
    const senderKeypair = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.PRIVATE_KEY)));
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: senderKeypair.publicKey,
        toPubkey: tokenDetails.contractAddress, // Replace with token address
        lamports: 1000000, // Adjust amount as needed
      })
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);
    console.log('Transaction successful:', signature);
  } catch (error) {
    console.error('Transaction failed:', error);
    if (error.message.includes('Blockhash not found')) {
      console.warn('Retrying transaction with a new blockhash...');
      snipeToken(tokenDetails);
    }
  }
};

module.exports = { snipeToken };