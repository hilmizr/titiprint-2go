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
        Schema::create('user', function (Blueprint $table) {
            $table->uuid('user_id')->primary();
            $table->string('email', 60);
            $table->string('password', 32);
            $table->string('nama_user', 60);
            $table->string('telephone', 15);
            $table->boolean('is_member');
            $table->enum('role', ['customer', 'admin']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }
};
