<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengiriman extends Model
{
    use HasFactory;

    protected $fillable = [
        'pengiriman_id',
        'no_pengiriman',
        'alamat_tujuan',
        'status_pengiriman',
        'pesanan_id'
    ];
}
