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
        Schema::create('pengiriman', function (Blueprint $table) {
            $table->uuid('pengiriman_id')->primary();
            $table->integer('no_pengiriman');
            $table->string('alamat_tujuan', 100);
            $table->string('status_pengiriman', 20)->nullable();
            $table->uuid('pesanan_id');

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
        Schema::dropIfExists('pengiriman');
    }
};
