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
        Schema::create('file', function (Blueprint $table) {
            $table->uuid('file_id')->primary();
            $table->string('nama_file', 255);
            $table->integer('sub_total_harga');
            $table->uuid('pesanan_id');
            $table->uuid('user_id');

            $table->foreign('pesanan_id')->references('pesanan_id')->on('pesanan');
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
        Schema::dropIfExists('file');
    }
};
