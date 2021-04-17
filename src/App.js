import React from "react";
import './App.css';
import AddTransaction from "./Components/AddTransaction";
import {Balance} from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpence from "./Components/IncomeExpence";
import TransactionList from "./Components/TransactionList";
import { GlobalProvider } from "./context/transContext";


function App() {
   
  return (
    <GlobalProvider>
        <Header />
        <div className='container'>
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
        </div>     
    </GlobalProvider>
  );
}

export default App;
