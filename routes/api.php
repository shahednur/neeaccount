<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
