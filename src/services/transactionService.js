import Transaction from '../models/Transaction';

const getTransactions = async(transactions) => {
    return await Transaction.find(transactions);
};

export default {getTransactions};
