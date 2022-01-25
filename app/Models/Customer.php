<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'status',
        'city',
        'address1',
        'address2',
        'zip_code',
        'billing_address',
        'website',
        'rating',
        'region_id',
        'country_id',
        'industry_id',
    ];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class);
    }
}
