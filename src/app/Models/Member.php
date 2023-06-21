<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'level_id',
        'user_id',
        'has_promo',
        'total_pengeluaran'
    ];
}
