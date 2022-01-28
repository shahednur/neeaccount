<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Unit;

class Material extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cost',
        'unit_id',
        'vat_rate',
        'vat',
        'quantity'
    ];

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }
}
