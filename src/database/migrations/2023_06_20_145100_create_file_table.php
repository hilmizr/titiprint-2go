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
        Schema::create('files', function (Blueprint $table) {
            $table->uuid('file_id')->primary();
            $table->string('nama_file', 255);
            $table->integer('sub_total_harga');
            $table->uuid('pesanan_id');
            $table->timestamps();

            $table->foreign('pesanan_id')->references('pesanan_id')->on('pesanans');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
};
