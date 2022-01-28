import React, { useState, useMemo } from 'react';
import { useAddCustomer } from '../hooks/CustomerHook';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Loader from '../components/Loader';



function AddCustomer() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [city, setCity] = useState('');
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [zip, setZip] = useState('')
  const [bill, setBill] = useState('');
  const [website, setWebsite] = useState('')
  const [region, setRegion] = useState('')
  const [country, setCountry] = useState('')
  const [industry, setIndustry] = useState('')
  const [rating, setRating] = useState(1)

  const onSuccess = (data) => {
    window.flash('All the records has been loaded successfully!', 'success')
    console.log(data);
  }

  const onError = (error) => {
    window.flash(`Something went wrong ! ${error}`, 'error')
    console.log(error);
  }

  const { mutate:addCustomer } = useAddCustomer(onSuccess,onError);

  const handleAddCustomerClick = () => {
    const data = {
      name,
      email,
      phone,
      status,
      city,
      address1,
      address2,
      zip,
      bill,
      website,
      region,
      country,
      industry,
      rating
    }
    addCustomer(data);
  }


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div className="grid grid-flow-col  sm:auto-cols-max justify-start sm:justify-end gap-2">
              </div>
            </div>
            {/* Cards */}
            <div className="container mx-auto">
            <div className="flex">
              {/* Card (Customers) */}
                <div className="mr-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                    <h1 className="text-2xl font-medium leading-tight mt-0 mb-2 text-blue-600">Customer Creation Form:</h1>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Customer Name
                    </label>
                    <input value={name} onChange={e=>setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Customer Name" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input value={email} onChange={e=>setEmail(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
                      Website
                    </label>
                    <input value={website} onChange={e=>setWebsite(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="website" type="text" placeholder="Website" />
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
                    Rating
                  </label>
                  <div className="relative">
                    <select value={rating} onChange={e=>setRating(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="rating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  </div>
                    </div>
                    <div className="flex flex-row">
                    <div className="mb-4 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
                      Zip Code
                    </label>
                    <input value={zip} onChange={e=>setZip(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip" type="text" placeholder="Zip Code" />
                  </div>
                  <div className="mb-6 mr-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                      City
                    </label>
                    <input value={city} onChange={e=>setCity(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" />
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="region">
                    Region
                  </label>
                  <div className="relative">
                    <select value={region} onChange={e=>setRegion(e.target.value)}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="region">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="country">
                    Country
                  </label>
                  <div className="relative">
                    <select value={country} onChange={e=>setCountry(e.target.value)}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="country">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  </div>
                  <div className="mb-6 mr-4">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="industry">
                    Industry
                  </label>
                  <div className="relative">
                    <select value={industry} onChange={e=>setIndustry(e.target.value)}  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="industry">
                    <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  </div>
                    </div>
                    <div className="flex flex-row">
                    <div class="mb-3 xl:w-60 mr-4">
                      <label for="address1" class="form-label inline-block mb-2 text-gray-700">Current Address</label>
                      <textarea value={address1} onChange={e=>setAddress1(e.target.value)} class="resize-none form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address1" rows="3" placeholder="Current Address"></textarea>
                    </div>
                    <div class="mb-3 xl:w-60 mr-4">
                      <label for="address2" class="form-label inline-block mb-2 text-gray-700">Permanent Address</label>
                      <textarea value={address2} onChange={e=>setAddress2(e.target.value)} class="resize-none form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address2" rows="3" placeholder="Permenent Address"></textarea>
                    </div>
                    <div class="mb-3 xl:w-60 mr-4">
                      <label for="address3" class="form-label inline-block mb-2 text-gray-700">Billing Address</label>
                      <textarea value={bill} onChange={e=>setBill(e.target.value)} class="resize-none form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address3" rows="3" placeholder="Billing Adress"></textarea>
                    </div>
                  <div className="mb-6 mr-4">
                  <label for="address3" class="form-label inline-block mb-2 text-gray-700">Status:</label>
                  <div class="flex justify-center">
                    <div class="form-check form-check-inline mr-2">
                      <input value={status} onChange={e=>setStatus(e.target.value)} class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label inline-block text-gray-800" for="inlineRadio10">Active</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input value={status} onChange={e=>setStatus(e.target.value)} class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label inline-block text-gray-800" for="inlineRadio20">In Active</label>
                    </div>
                  </div>
                  </div>
                    </div>
                  <div className="flex items-center float-right justify-between">
                    <button onClick={handleAddCustomerClick} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mr-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                      Save
                    </button>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AddCustomer;