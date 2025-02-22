import UserVerification from './userVerification';

class BuyUSDT {
    private userVerification: UserVerification;

    constructor(userVerification: UserVerification) {
        this.userVerification = userVerification;
    }

    buy(amount: number, walletAddress: string) {
        if (!this.userVerification.isUserVerified()) {
            throw new Error("User is not verified");
        }
        if (!walletAddress) {
            throw new Error("Wallet address is required to buy USDT");
        }
        // Process buying USDT
        // ...existing code...
    }
}

export default BuyUSDT;
