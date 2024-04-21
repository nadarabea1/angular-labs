class Account {
    constructor(acc_no, balance) {
        this.acc_no = acc_no;
        this.balance = balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class Saving_Account extends Account {
    constructor(acc_no, balance, min_balance) {
        super(acc_no, balance);
        this.min_balance = min_balance;
    }
}
class Current_Account extends Account {
    constructor(acc_no, balance, interset_rate) {
        super(acc_no, balance);
        this.interset_rate = interset_rate;
    }
}
