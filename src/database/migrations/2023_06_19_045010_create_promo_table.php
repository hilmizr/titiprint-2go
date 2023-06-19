<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promo', function (Blueprint $table) {
            $table->uuid('promo_id')->primary();
            $table->string('promo_name', 20);
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->decimal('discount_rate', 4, 2);
            $table->uuid('level_id')->nullable();

            $table->foreign('level_id')->references('level_id')->on('level');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('promo');
    }
};
