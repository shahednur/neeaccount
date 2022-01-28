<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->integer('quantity')->nullable();
            $table->float('sub_total')->nullable();
            $table->integer('vat')->nullable();
            $table->float('total')->nullable();
            $table->float('pay')->nullable();
            $table->float('due')->nullable();
            $table->date('order_date')->nullable();
            $table->date('order_month')->nullable();
            $table->date('order_year')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
