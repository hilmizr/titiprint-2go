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
        Schema::create('member', function (Blueprint $table) {
            $table->uuid('member_id')->primary();
            $table->uuid('level_id');
            $table->uuid('user_id');
            $table->boolean('has_promo')->nullable();
            $table->integer('total_pengeluaran')->default(0);

            $table->foreign('level_id')->references('level_id')->on('level');
            $table->foreign('user_id')->references('user_id')->on('user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member');
    }
};
