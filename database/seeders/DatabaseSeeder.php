<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // \App\Models\Company::factory(10)->create();
        // \App\Models\Journal::factory(10)->create();
        // \App\Models\Country::factory(10)->create();
        // \App\Models\Industry::factory(10)->create();
        // \App\Models\Region::factory(10)->create();
        // \App\Models\Customer::factory(10)->create();
        // \App\Models\Unit::factory(10)->create();
        \App\Models\Currency::factory(5)->create();
    }
}
