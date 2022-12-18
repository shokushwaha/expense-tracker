import '../CSS/Totalexpenses.css'

export default function Totalexpenses({
    setPlus,
    setShowAddBox,
    transactions,
}) {
    var income = 0;
    var balance = 0;
    var expense = 0;
    transactions.forEach((element) => {
        balance += element.amount;
        if (element.amount < 0) expense -= element.amount;
        else income += element.amount;
    });
    return (
        <div className="TotalExpenses">
            <div className="TotalBalance box">
                <div className="box-title1">Balance Amount</div>
                <div className="box-amount">{balance}</div>
            </div>
            <div className="TotalIncomeandBalance">
                <div className="TotalIncome box box2">
                    <div className="box-title2">Total Earning</div>
                    <div className="box-amount">
                        {income} </div>
                    <div
                        className="box-button1"
                        onClick={() => {
                            setShowAddBox(true);
                            setPlus(true);
                        }}
                    >
                        Add New
                    </div>
                </div>
                <div className="TotalExpense box box2">
                    <div className="box-title3">Total Expense</div>
                    <div className="box-amount">{expense}</div>
                    <div
                        className="box-button2"
                        onClick={() => {
                            setShowAddBox(true);
                            setPlus(false);
                        }}
                    >
                        Add New
                    </div>
                </div>
            </div>
        </div>
    );
}