import '../CSS/TransactionHistory.css'
export default function TransactionHistory({ transactions, setTransactions }) {
    const removeItem = (transaction) => {
        setTransactions(transactions.filter((item) => item !== transaction));
    };
    return (
        <div className="TransactionHistory">
            <div className="h-title">Transaction History</div>
            <div className="TransactionHistoryList">
                {!transactions.length && (
                    <div className="no-transactions">No Transactions</div>
                )}
                {transactions.map((transaction) => (
                    <div className="TransactionHistoryListItem" key={transaction.time}>
                        <div className="title-time">
                            <div
                                className={
                                    transaction.amount > 0
                                        ? "plus one-transaction-title"
                                        : "minus one-transaction-title"
                                }
                            >
                                {transaction.title}
                            </div>
                            <div className="transaction-time">{transaction.time}</div>
                        </div>
                        <div className="THAmount1">
                            <div className="THAmount">Rs. {Math.abs(transaction.amount)}</div>
                            <div
                                onClick={() => removeItem(transaction)}
                                className="del-btn"
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}