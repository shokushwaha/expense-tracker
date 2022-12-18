import './App.css';
import { useState } from 'react';
import Addtransaction from './components/Addtransaction'
import Totalexpenses from './components/Totalexpenses'
import TransactionHistory from './components/TransactionHistroy'
function App() {

  const [transactions, setTransactions] = useState([]);
  const [showAddBox, setShowAddBox] = useState(false);
  const [plus, setPlus] = useState(true);
  return (

    <div className="wrapper">
      <div className="App">

        <div className="App-Title"> EXPENSE TRACKER APP</div>
        <Totalexpenses
          transactions={transactions}
          setPlus={setPlus}
          setShowAddBox={setShowAddBox}
        />
        {showAddBox && (
          <Addtransaction
            plus={plus}
            setTransactions={setTransactions}
            setShowAddBox={setShowAddBox}
          />
        )}
        <TransactionHistory
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
}

export default App;
