<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\JournalController;
use App\Http\Controllers\RegionController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\UnitController;
use App\Http\Controllers\IndustryController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\MaterialController;
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
Route::get('/countries', [CountryController::class, 'index'])->name('countries.index');
Route::post('/countries/new', [CountryController::class, 'store'])->name('countries.store');
Route::delete('/countries/delete/{id}', [CountryController::class, 'destroy'])->name('countries.destroy');
Route::get('/units', [UnitController::class, 'index'])->name('units.index');
Route::post('/units/new', [UnitController::class, 'store'])->name('units.store');
Route::get('/industry', [IndustryController::class, 'index'])->name('industry.index');
Route::post('/industry/new',[IndustryController::class, 'store'])->name('industry.store');
Route::get('/currency', [CurrencyController::class, 'index'])->name('currency.index');
Route::post('/currency/new', [CurrencyController::class, 'store'])->name('currency.store');
Route::post('/customer/new', [CustomerController::class, 'store'])->name('customer.store');
Route::get('/customers', [CustomerController::class, 'index'])->name('customer.index');
Route::get('/materials', [MaterialController::class, 'index'])->name('material.index');
Route::post('/material/new', [MaterialController::class, 'store'])->name('material.store');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
