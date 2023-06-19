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
        Schema::create('detail_file', function (Blueprint $table) {
            $table->uuid('file_id')->primary();
            $table->string('format', 5);
            $table->string('ukuran_kertas', 10);
            $table->string('jenis_kertas', 10)->nullable();
            $table->tinyInteger('warna')->nullable();
            $table->integer('jumlah_copy')->nullable();
            $table->string('keterangan', 255)->nullable();

            $table->foreign('file_id')->references('file_id')->on('file');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_file');
    }
};
