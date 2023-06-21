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
        Schema::create('pesanans', function (Blueprint $table) {
            $table->uuid('pesanan_id')->primary();
            $table->integer('jumlah_file');
            $table->integer('total_harga');
            $table->string('status_pesanan', 10);
            $table->boolean('diambil_cust')->default(0);
            $table->dateTime('waktu_pesan');
            $table->dateTime('waktu_selesai')->nullable();
            $table->uuid('user_id');
            $table->timestamps();

            $table->foreign('user_id')->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pesanans');
    }
};
