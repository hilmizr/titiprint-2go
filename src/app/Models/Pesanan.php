<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    use HasFactory;

    protected $fillable = [
        'pesanan_id',
        'jumlah_file',
        'total_harga',
        'status_pesanan',
        'diambil_cust',
        'waktu_pesan',
        'waktu_selesai',
        'user_id'
    ];
}
