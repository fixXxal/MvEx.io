import UserVerification from './userVerification';

class SellUSDT {
    private userVerification: UserVerification;

    constructor(userVerification: UserVerification) {
        this.userVerification = userVerification;
    }

    sell(amount: number, accountNumber: string) {
        if (!this.userVerification.isUserVerified()) {
            throw new Error("User is not verified");
        }
        if (!accountNumber) {
            throw new Error("Account number is required to sell USDT");
        }
        // Process selling USDT
        // Handle account number submission
        this.submitAccountNumber(accountNumber);
    }

    private submitAccountNumber(accountNumber: string) {
        // Logic to submit account number
    }
}

export default SellUSDT;
