<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Company;

class Journal extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'deal_date',
        'debit_account_key',
        'debit_sub_account_key',
        'debit_amount',
        'credit_account_key',
        'credit_sub_account_key',
        'credit_amount',
        'remark',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
