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
        Schema::create('detail_files', function (Blueprint $table) {
            $table->uuid('detail_file_id')->primary();
            $table->uuid('file_id');
            $table->string('format', 5);
            $table->string('ukuran_kertas', 10);
            $table->string('jenis_kertas', 10);
            $table->boolean('is_berwarna');
            $table->integer('jumlah_copy')->default(1);
            $table->string('keterangan', 255)->nullable();
            $table->timestamps();

            $table->foreign('file_id')->references('file_id')->on('files');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail_files');
    }
};
