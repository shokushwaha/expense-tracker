import { useRef } from "react";
import '../CSS/Addtransaction.css'
export default function Addtransaction({
    plus,
    setTransactions,
    setShowAddBox,
}) {
    const valueRef = useRef();
    const titleRef = useRef();
    const addNewTransaction = () => {
        if (valueRef.current.value) {
            let newValue = plus ? valueRef.current.value : -valueRef.current.value;
            let untitled = plus ? "Untitled Earning" : "Untitled Expense";
            let newTransaction = {
                title: titleRef.current.value || untitled,
                amount: parseFloat(newValue),
                time: new Date().toLocaleString(),
            };
            setTransactions((oldTransactions) => [
                newTransaction,
                ...oldTransactions,
            ]);
            setShowAddBox(false);
        }
    };
    return (
        <div className="AddTransaction">
            <div className="transaction-title">
                Add New {plus ? "Income" : "Expense"}
            </div>
            <div className="add-inputs">
                <div>
                    <input ref={titleRef} type="text" placeholder="Enter Title" />
                </div>
                <div>
                    <input ref={valueRef} type="number" placeholder="Enter Amount" />
                </div>
            </div>
            <div className="buttons">
                <div
                    className="add-trans-btn cancel-btn"
                    onClick={() => setShowAddBox(false)}
                >
                    Cancel
                </div>
                <div className="add-trans-btn" onClick={addNewTransaction}>
                    ADD
                </div>
            </div>
        </div>
    );
}