interface Account {
    date_of_opening;

    addCustomer();
    removeCustomer();
}

class Account {
    acc_no;
    balance;
    constructor(acc_no, balance) {
        this.acc_no = acc_no;
        this.balance = balance;

    }

    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}

class Saving_Account extends Account implements Account {
    min_balance;
    constructor(acc_no, balance, min_balance) {
        super(acc_no, balance);
        this.min_balance = min_balance;
    }
}
class Current_Account extends Account implements Account {
    interset_rate;
    constructor(acc_no, balance, interset_rate) {
        super(acc_no, balance);
        this.interset_rate = interset_rate;
    }
}