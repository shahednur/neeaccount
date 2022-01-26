<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\JournalController;
use App\Http\Controllers\RegionController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('accounts/{company_id}',[AccountController::class,'getAllAccounts'])->name('accounts');
Route::post('accounts/new',[AccountController::class,'registerAccount'])->name('accounts.new');
Route::put('accounts/update',[AccountController::class,'updateAccount'])->name('accounts.update');
Route::delete('accounts/delete/{id}',[AccountController::class,'deleteAccount'])->name('accounts.delete');
Route::post('journal/new',[JournalController::class, 'registerJournal'])->name('journal.new');
Route::get('journal/{company_id}', [JournalController::class, 'getAllJournals'])->name('journals');
Route::get('/regions', [RegionController::class, 'index'])->name('regions.index');
Route::post('/regions/new', [RegionController::class, 'store'])->name('regions.store');
Route::delete('/regions/delete/{id}', [RegionController::class, 'destroy'])->name('regions.destroy');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
