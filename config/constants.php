<?php 

return [
    'CLASSIFICATIONS'=>[
        'sales',
        'cost_of_goods_sold',
        'selling_general_admin_expenses',
        'non_operating_income',
        'non_operating_expenses',
        'special_income',
        'special_expenses',
        'income_taxes',
        'current_assets',
        'non_current_assets',
        'current_liabilities',
        'non_current_liabilities',
        'equity'
    ],
    'DEFAULT_ACCOUNTS'=>[
        'sales'=>[
            'name'=>'বিক্রয়',
            'classification'=>'sales',
            'account_key'=>'sales'
        ],
        'purchases'=>[
            'name'=>'ক্রয়',
            'classification'=>'cost_of_goods_sold',
            'account_key'=>'purchae'
        ],
        'salaries_expense'=>[
            'name'=>'বেত্ন-ব্যয়',
            'classification'=>'selling_general_admin_expenses',
            'account_key'=>'salaries_expense'
        ],
        'bonuses'=>[
            'name'=>'বোনাস',
            'classfication'=>'selling_general_admin_expenses',
            'account_key'=>'bonuses'
        ],
        'advertising_expense'=>[
            'name'=>'বিজ্ঞাপন ব্যয়',
            'classfication'=>'selling_general_admin_expenses',
            'account_key'=>'advertising_expense'
        ],
        'travelling_expense'=>[
            'name'=>'যাতায়াত ব্যয়',
            'classification'=>'selling_general_admin_expenses',
            'account_key'=>'traveling_expense'
        ],
        'entertainment_expense'=>[
            'name'=>'বিনোদন ব্যয়',
            'classification'=>'selling_general_admin_expenses',
            'account_key'=>'entertainment_expense'
        ],
        'depreciation_expense'=>[
            'name'=>'অবচয় ব্যয়',
            'classification'=>'selling_general_admin_expenses',
            'account_key'=>'depreciation_expense'
        ],
        'interest_income'=>[
            'name'=>'মুনাফা লাভ',
            'classfication'=>'non_operating_income',
            'account_key'=>'interest_income'
        ],
        'divident_income'=>[
            'name'=>'লভ্যাংশ আয়',
            'classification'=>'non_operating_income',
            'account_key'=>'divident_income'
        ],
        'gain_on_sale_of_securities'=>[
            'name'=>'সিকিউরিটিজ বিক্রয়ের উপর লাভ',
            'classfication'=>'non_operating_income',
            'account_key'=>'gain_on_sale_of_securities'
        ],
        'miscellaneous_income'=>[
            'name'=>'অন্যান্য আয়',
            'classification'=>'non_operating_income',
            'account_key'=>'interest_income'
        ],
        'interest_expense'=>[
            'name'=>'মুনাফা ব্যয়',
            'classification'=>'non_operating_expenses',
            'account_key'=>'interest_expense'
        ],
        'loss_on_sale_of_securities'=>[
            'name'=>'সিকিউরিটিজ বিক্রয়ের উপর ব্যয়',
            'classification'=>'non_operating_expenses',
            'account_key'=>'loss_on_sale_of_securities'
        ],
        'miscellaneous_loss'=>[
            'name'=>'অন্যান্য ব্যয়',
            'classification'=>'non_operating_expenses',
            'account_key'=>'miscellaneous_loss'
        ],
        'gain_on_sale_of_fixed_assets'=>[
            'name'=>'স্থায়ী সম্পদ বিক্রির উপর লাভ',
            'classification'=>'special_income',
            'account_key'=>'gain_on_sale_of_fixed_assets'
        ],
        'gain_on_sale_of_investment_securities'=>[
            'name'=>'বিনিয়োগ সিকিউরিটিজ বিক্রয়ের উপর লাভ',
            'classification'=>'special_income',
            'account_key'=>'gain_on_sale_of_investment_securities'
        ],
        'cash'=> [
            'name' => 'নগদ',
            'classification' => 'current_assets',
            'account_key' => 'cash'
        ],
        'checking_accounts'=> [
            'name' => 'হিসাব চেক',
            'classification' => 'current_assets',
            'account_key' => 'checking_accounts'
        ],
        'savings_accounts'=> [
            'name' => 'সঞ্চয়ী হিসাব',
            'classification' => 'current_assets',
            'account_key' => 'savings_accounts'
        ],
        'notes_receivable'=> [
            'name' => 'প্রাপ্য নোট',
            'classification' => 'current_assets',
            'account_key' => 'notes_receivable'
        ],
        'accounts_receivable'=> [
            'name' => 'প্রাপ্য হিসাব',
            'classification' => 'current_assets',
            'account_key' => 'accounts_receivable'
        ],
        'merchandise'=> [
            'name' => 'পণ্যসামগ্রী',
            'classification' => 'current_assets',
            'account_key' => 'merchandise'
        ],
        'work_in_process'=> [
            'name' => 'প্রক্রিয়া চলছে',
            'classification' => 'current_assets',
            'account_key' => 'work_in_process'
        ],
        'loans_receivable'=> [
            'name' => 'প্রাপ্য ঋণ',
            'classification' => 'current_assets',
            'account_key' => 'loans_receivable'
        ],
        'interest_receivable'=> [
            'name' => 'প্রাপ্য আয়',
            'classification' => 'current_assets',
            'account_key' => 'interest_receivable'
        ],
        'prepaid_expenses'=> [
            'name' => 'অগ্রিম ব্যয়',
            'classification' => 'current_assets',
            'account_key' => 'prepaid_expenses'
        ],
        'buildings'=> [
            'name' => 'ভবন',
            'classification' => 'non_current_assets',
            'account_key' => 'buildings'
        ],
        'structures'=> [
            'name' => 'কাঠামো',
            'classification' => 'non_current_assets',
            'account_key' => 'structures'
        ],
        'vehicles'=> [
            'name' => 'যানবাহন',
            'classification' => 'non_current_assets',
            'account_key' => 'vehicles'
        ],
        'land'=> [
            'name' => 'জমি',
            'classification' => 'non_current_assets',
            'account_key' => 'land'
        ],
        'goodwill'=> [
            'name' => 'সুনাম',
            'classification' => 'non_current_assets',
            'account_key' => 'goodwill'
        ],
        'patents'=> [
            'name' => 'পেটেন্ট',
            'classification' => 'non_current_assets',
            'account_key' => 'patents'
        ],
        'copyrights'=> [
            'name' => 'কপিরাইট',
            'classification' => 'non_current_assets',
            'account_key' => 'copyrights'
        ],
        'investment_securities'=> [
            'name' => 'বিনিয়োগ সিকিউরিটিজ',
            'classification' => 'non_current_assets',
            'account_key' => 'investment_securities'
        ],
        'organization_costs'=> [
            'name' => 'প্রাতিষ্ঠানিক ব্যয়',
            'classification' => 'non_current_assets',
            'account_key' => 'organization_costs'
        ],
        'notes_payable'=> [
            'name' => 'প্রদেয় নোট',
            'classification' => 'current_liabilities',
            'account_key' => 'notes_payable'
        ],
        'accounts_payable'=> [
            'name' => 'প্রদেয় হিসাব',
            'classification' => 'current_liabilities',
            'account_key' => 'accounts_payable'
        ],
        'short_term_loans_payable'=> [
            'name' => 'স্বল্পমেয়াদী ঋণ প্রদেয়',
            'classification' => 'current_liabilities',
            'account_key' => 'short_term_loans_payable'
        ],
        'income_taxes_payable'=> [
            'name' => 'আয় কর',
            'classification' => 'current_liabilities',
            'account_key' => 'income_taxes_payable'
        ],
        'accrued_expenses'=> [
            'name' => 'জমা খরচ',
            'classification' => 'current_liabilities',
            'account_key' => 'accrued_expenses'
        ],
        'advances_from_customers'=> [
            'name' => 'ক্রেতা থেকে অগ্রিম',
            'classification' => 'current_liabilities',
            'account_key' => 'advances_from_customers'
        ],
        'deferred_revenues'=> [
            'name' => 'বিলম্বিত রাজস্ব',
            'classification' => 'current_liabilities',
            'account_key' => 'deferred_revenues'
        ],
        'bonds_payable'=> [
            'name' => 'প্রদেয় বন্ড',
            'classification' => 'non_current_liabilities',
            'account_key' => 'bonds_payable'
        ],
        'long_term_loans_payable'=> [
            'name' => 'দীর্ঘমেয়াদী ঋণ প্রদেয়',
            'classification' => 'non_current_liabilities',
            'account_key' => 'long_term_loans_payable'
        ],
        'deposits_received'=> [
            'name' => 'প্রাপ্ত আমানত',
            'classification' => 'non_current_liabilities',
            'account_key' => 'deposits_received'
        ],
        'common_stock'=> [
            'name' => 'সাধারণ শেয়ার',
            'classification' => 'equity',
            'account_key' => 'common_stock'
        ],
        'retained_earnings'=> [
            'name' => 'ধরে রাখা আয়',
            'classification' => 'equity',
            'account_key' => 'retained_earnings'
        ],
        'income_taxes_current'=> [
            'name' => 'বর্তমান আয়কর',
            'classification' => 'income_taxes',
            'account_key' => 'income_taxes_current'
        ],
    ]
    ];