<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    use HasFactory;

    protected $fillable = [
        'promo_id',
        'nama_promo',
        'tanggal_mulai',
        'tanggal_selesai',
        'diskon',
        'level_id'
    ];
}
