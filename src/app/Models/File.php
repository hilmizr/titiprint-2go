<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'file_id',
        'nama_file',
        'sub_total_harga',
        'pesanan_id'
    ];
}
