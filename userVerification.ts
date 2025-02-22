class UserVerification {
    private phoneNumber: string;
    private idCardNumber: string;
    private isVerified: boolean;

    constructor() {
        this.isVerified = false;
    }

    verifyUser(phoneNumber: string, idCardNumber: string) {
        if (!this.isVerified) {
            this.phoneNumber = phoneNumber;
            this.idCardNumber = idCardNumber;
            this.isVerified = true;
            // Store phoneNumber and idCardNumber permanently in the system
            // ...code to store in database...
        }
    }

    isUserVerified(): boolean {
        return this.isVerified;
    }
}

export default UserVerification;
