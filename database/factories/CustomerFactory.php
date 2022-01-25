<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=> $this->faker->name(),
            'email'=> $this->faker->email,
            'phone'=> $this->faker->e164PhoneNumber,
            'status'=> $this->faker->boolean,
            'city'=> $this->faker->city,
            'address1'=> $this->faker->address,
            'address2'=> $this->faker->address,
            'zip_code'=> $this->faker->postcode,
            'billing_address'=> $this->faker->address,
            'website'=> $this->faker->url,
            'rating'=> $this->faker->randomDigit,
            'region_id'=> $this->faker->numberBetween(1,10),
            'country_id'=> $this->faker->numberBetween(1,10),
            'industry_id'=> $this->faker->numberBetween(1,10),
        ];
    }
}
