<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Salary;

class Salary extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'amount',
        'salary_date',
        'month',
        'year'
    ];

    public function salary()
    {
        return $this->belongsTo(Salary::class);
    }
}
