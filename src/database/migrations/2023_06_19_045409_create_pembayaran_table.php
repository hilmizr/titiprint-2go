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
        Schema::create('pembayaran', function (Blueprint $table) {
            $table->uuid('kode_pembayaran')->primary();
            $table->string('metode_pembayaran', 20);
            $table->string('status_pembayaran', 10)->nullable();
            $table->uuid('pesanan_id')->nullable();

            $table->foreign('pesanan_id')->references('pesanan_id')->on('pesanan');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pembayaran');
    }
};
