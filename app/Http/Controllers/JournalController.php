<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Journal;
use App\Models\Account;
use App\Models\Company;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use Carbon\Carbon;

class JournalController extends Controller
{
    public function getAllJournals(int $companyId):object
    {
        $company = Company::select('fiscal_start_date','fiscal_end_date')
        ->where('id', $companyId)
        ->first();

        $subQuery = Journal::from('journals as j')
            ->select(
                'j.id',
                'j.company_id',
                'j.deal_date',
                'j.debit_account_key',
                'j.debit_sub_account_key',
                'j.debit_amount',
                'j.credit_account_key',
                'j.credit_sub_account_key',
                'j.credit_amount',
                'j.remark'
            )
            ->where('company_id', $companyId)->get();


            return response()->json($subQuery, Response::HTTP_OK);


    }


    public function registerJournal(Request $request):object
    {
        try{
            $dt = Carbon::parse($request->deal_date)->format('Y-m-d');

            $journal = new Journal();
            $journal->company_id = 5;
            $journal->deal_date = $dt;
            $journal->debit_account_key = $request->debit_account_key;
            $journal->debit_sub_account_key = $request->debit_sub_account_key;
            $journal->debit_amount = $request->debit_amount;
            $journal->credit_account_key = $request->credit_account_key;
            $journal->credit_sub_account_key = $request->credit_sub_account_key;
            $journal->credit_amount = $request->credit_amount;
            $journal->remark = $request->remark;
            $journal->save();

            return response()->json(['message' => 'Account created successfully'], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteJournal($id)
    {
        try{
            $journal = Journal::findOrFail($id);
            if(!$journal){
                return response()->json(['message' => 'Journal not found!'], Response::HTTP_NOT_FOUND);
            }
            $journal->delete();
            return response()->json(['message' => 'Journal deleted successfully'], Response::HTTP_OK);
        }catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
