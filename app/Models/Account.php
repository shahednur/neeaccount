<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use \App\Models\Company;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_id',
        'name',
        'account_key',
        'classification',
        'is_default_account',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
