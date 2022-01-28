<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Region;
use App\Models\Country;
use App\Models\Industry;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $customers = Customer::with('region','country','industry')->get();
        
        return response()->json($customers, Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $customer = new Customer();
            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->phone = $request->phone;
            $customer->status = $request->status;
            $customer->city = $request->city;
            $customer->address1 = $request->address1;
            $customer->address2 = $request->address2;
            $customer->zip_code = $request->zip;
            $customer->billing_address = $request->bill;
            $customer->website = $request->website;
            $customer->rating = $request->rating;
            $customer->region_id = $request->region;
            $customer->country_id = $request->country;
            $customer->industry_id = $request->industry;
            $customer->save();

            return response()->json(['success','Customer has been created successfully!'],Response::HTTP_CREATED);
        }catch(\Exception $e){
            return response()->json(['message','someting went wrong'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
