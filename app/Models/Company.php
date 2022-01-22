<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
            'name',
            'industry_class',
            'number_of_employees',
            'fiscal_start_date',
            'fiscal_end_date',
            'founded_date',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
