import Transaction from '../models/Transaction';

const getTransactions = async(transactions) => {
    return await Transaction.find(transactions);
};

const addTransaction = async({name, note, amount, category, type, property}) => {
    return await new Transaction({
        name,
        note,
        amount,
        category,
        type,
        property
    }).save();
};

export default { getTransactions, addTransaction };

