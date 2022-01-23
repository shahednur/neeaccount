<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class JournalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $amount = $this->faker->numberBetween(1000, 200000);
        $defaultAccounts = config('constants.DEFAULT_ACCOUNTS');
        $debitDefaultAccounts = $this->faker->shuffleArray($defaultAccounts);
        $creditDefaultAccounts = $this->faker->shuffleArray($defaultAccounts);

        return [
            'company_id'=>5,
            'deal_date'=> $this->faker->dateTime,
            'debit_account_key'=> $debitDefaultAccounts[0]['account_key'],
            'debit_sub_account_key'=> $this->faker->company,
            'debit_amount'=> $amount,
            'credit_account_key'=> $creditDefaultAccounts[0]['account_key'],
            'credit_sub_account_key'=> $this->faker->company,
            'credit_amount'=> $amount,
            'remark' => $this->faker->word,
        ];
    }
}
