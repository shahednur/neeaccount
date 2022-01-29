import React,{ useState } from 'react';
import { useAddUnit } from '../hooks/UnitHook';
import DatePicker from "react-datepicker";

const OrderForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [deal_date, setDealDate] = useState(new Date());
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sub_total, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [pay, setPay] = useState(0);
  const [due, setDue] = useState(0);
  const [total, setTotal] = useState(0);

  const onSuccess = (data) => {
    window.flash('Unit has been created successfully!', 'success')
    console.log(data);
  }

  const onError = (error) => {
    window.flash(`Unit can not be created! ${error}`, 'error')
    console.log(error);
  }

  
  const { mutate:addUnit } = useAddUnit(onSuccess,onError);

  const handleAddConfClick = () => {
    const data = {
      name
    }
    addUnit(data);
  }

  return (
    <>
    <form>
        <div className="mb-4">
        <h1 className="text-2xl font-medium leading-tight mt-0 mb-2 text-blue-600">Order</h1>
        </div>
        <div className="flex">
        <div className="mb-4 w-40 mr-4">
        <label className="block w-full text-gray-700 text-sm font-bold mb-2" htmlFor="unit">
          Order Date
        </label>
        <DatePicker value={deal_date} onChange={e=>setDealDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div className="mb-4 w-40">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="unit">
          Customer Name
          </label>
          <div className="relative">
            <select value={name} onChange={e=>setName(e.target.value)} className="block appearance-none w-40 bg-gray-200 border border-gray-200 text-gray-700 py-2 mt-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="unit">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input value={quantity} onChange={e=>setQuantity(e.target.value)} className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Quantity" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sub-total">
          Sub Total
        </label>
        <input value={sub_total} onChange={e=>setSubTotal(e.target.value)} className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sub-total" type="number" placeholder="Sub Total" />
      </div>
        </div>
        <div className="flex">
        <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vat">
          Vat
        </label>
        <input value={vat} onChange={e=>setVat(e.target.value)}  className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="vat" type="number" placeholder="Vat" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total">
          Total
        </label>
        <input value={total} onChange={e=>setTotal(e.target.value)}  className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="total" type="number" placeholder="Total" />
      </div>
        </div>
        <div className="flex">
        <div className="mb-4 mr-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pay">
          Pay
        </label>
        <input value={pay} onChange={e=>setPay(e.target.value)}  className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pay" type="number" placeholder="Pay" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="due">
          Due
        </label>
        <input value={due} onChange={e=>setDue(e.target.value)} className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="due" type="number" placeholder="Due" />
      </div>
        </div>
      <div className="flex items-center justify-between float-right">
        <button onClick={handleAddConfClick} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Save
        </button>
      </div>
    </form>
  </>
  );
};

export default OrderForm;
