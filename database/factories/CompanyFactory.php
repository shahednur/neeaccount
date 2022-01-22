<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => $this->faker->unique()->randomNumber(),
            'name' => $this->faker->company,
            'industry_class' => 'IT',
            'number_of_employees' => $this->faker->randomDigit,
            'fiscal_start_date' => $this->faker->dateTime,
            'fiscal_end_date' => $this->faker->dateTime,
            'founded_date' => $this->faker->dateTime,
        ];
    }
}
