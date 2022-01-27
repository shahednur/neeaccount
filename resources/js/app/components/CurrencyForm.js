import React,{ useState } from 'react';
import { useAddCurrency } from '../hooks/CurrencyHook';

const CurrencyForm = () => {
  const [name, setName] = useState('');

  const onSuccess = (data) => {
    window.flash('Unit has been created successfully!', 'success')
    console.log(data);
  }

  const onError = (error) => {
    window.flash(`Unit can not be created! ${error}`, 'error')
    console.log(error);
  }

  
  const { mutate:addCurrency } = useAddCurrency(onSuccess,onError);

  const handleAddConfClick = () => {
    const data = {
      name
    }
    addCurrency(data);
  }

  return (
    <>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
        <h1 className="text-2xl font-medium leading-tight mt-0 mb-2 text-blue-600">Currency</h1>
        </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
          Currency Name
        </label>
        <input value={name} onChange={e=>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="currency" type="text" placeholder="Currency Name" />
      </div>
      <div className="flex items-center justify-between">
        <button onClick={handleAddConfClick} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Register
        </button>
      </div>
    </form>
  </>
  );
};

export default CurrencyForm;
