<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Account;

class AccountController extends Controller
{
    public function getAllAccounts(int $companyId):object
    {
        $accounts = Account::select('id','company_id', 'name', 'account_key', 'classification', 'is_default_account')
            ->where('company_id', $companyId)
            ->orderBy('classification', 'asc')
            ->get();

        return response()->json($accounts, Response::HTTP_OK);
    }

    public function registerAccount(Request $request):object
    {
        try{
            $exists = Account::select('company_id','account_key')
                ->where('company_id', $request->company_id)
                ->where('account_key', $request->account_key)
                ->exists();

            if($exists){
                return response()->json(['message' => 'Account already exists'], Response::HTTP_BAD_REQUEST);
            }

            $account = new Account();
            $account->company_id = 5;
            $account->name = $request->name;
            $account->account_key = $request->account_key;
            $account->classification = $request->classification;
            $account->is_default_account = false;
            $account->save();

            return response()->json(['message' => 'Account created successfully'], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateAccount(Request $request):object
    {
        try{
            $account = Account::find($request->id);
            $account->name = $request->name;
            $account->account_key = $request->account_key;
            $account->classification = $request->classification;
            $account->is_default_account = false;
            $account->save();
            
            return response()->json(['message' => 'Account updated successfully'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteAccount(int $id):object
    {
        try{
            $account = Account::findOrFail($id);
            if(!$account){
                return response()->json(['message' => 'Account not found'], Response::HTTP_NOT_FOUND);
            }
            
            $account->delete();
            return response()->json(['message' => 'Account deleted successfully'], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
