import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { useAddTransaction } from '../hooks/TransactionHook'

import "react-datepicker/dist/react-datepicker.css";

const TransactionForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deal_date, setDealDate] = useState(new Date());
  const [debit_account_key, setDebitAccountKey] = useState('');
  const [debit_sub_account_key, setDebitSubAccountKey] = useState('');
  const [debit_amount, setDebitAmount] = useState('');
  const [credit_account_key, setCreditAccountKey] = useState('');
  const [credit_sub_account_key, setCreditSubAccountKey] = useState('');
  const [credit_amount, setCreditAmount] = useState('');
  const [remark, setRemark] = useState('');

  const { mutate:addTransaction } = useAddTransaction()

  const handleAddTransactionClick = () => {
    const data = {
      deal_date,
      debit_account_key,
      debit_sub_account_key,
      debit_amount,
      credit_account_key,
      credit_sub_account_key,
      credit_amount,
      remark
    }
    addTransaction(data)
  }
  return (
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full border text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                Deal Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                Dr Account
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                SubAccount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r-3">
                Dr Amount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                Cr Account
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                SubAccount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                Cr Amount
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2 border-r">
                Remark
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-1 py-2">
                Register
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <DatePicker value={deal_date} onChange={e=>setDealDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" selected={startDate} onChange={(date) => setStartDate(date)} />
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <select value={debit_account_key} onChange={e=>setDebitAccountKey(e.target.value)} className="block appearance-none w-24 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Sales</option>
                <option>Cost of goods sold</option>
                <option>Equity</option>
              </select>
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <input value={debit_sub_account_key} onChange={e=>setDebitSubAccountKey(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Sub Account" />
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r-3">
              <input value={debit_amount} onChange={e=>setDebitAmount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="number" placeholder="Dr Amount" />
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <select value={credit_account_key} onChange={e=>setCreditAccountKey(e.target.value)} className="block appearance-none w-24 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Sales</option>
                <option>Cost of goods sold</option>
                <option>Equity</option>
              </select>
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <input value={credit_sub_account_key} onChange={e=>setCreditSubAccountKey(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Sub Account" />
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <input value={credit_amount} onChange={e=>setCreditAmount(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="number" placeholder="Cr Amount" />
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap border-r">
              <input value={remark} onChange={e=>setRemark(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account" type="text" placeholder="Remarks" />
              </td>
              <td className="text-sm text-gray-900 font-light p-1 whitespace-nowrap">
              <button onClick={handleAddTransactionClick} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                 Register
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  );
};

export default TransactionForm;
