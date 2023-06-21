<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'detail_file_id',
        'file_id',
        'format',
        'ukuran_kertas',
        'jenis_kertas',
        'is_berwarna',
        'jumlah_copy',
        'keterangan'
    ];
}
