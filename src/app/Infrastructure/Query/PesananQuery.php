<?php 

namespace App\Infrastructure\Query;

use App\Application\Query\Pesanan\PesananDto;
use App\Application\Query\Pesanan\PesananQueryInterface;
use DateTime;
use Illuminate\Support\Facades\DB;

class PesananQuery implements PesananQueryInterface
{
  public function execute(string $pesanan_id): ?PesananDto
  {
    $sql = "SELECT p.pesanan_id
                    , p.jumlah_file
                    , p.total_harga
                    , p.status_pesanan
                    , p.diambil_cust
                    , p.waktu_pesan
                    , p.waktu_selesai
                FROM pesanan p
                WHERE p.pesanan_id = :pesanan_id";

    $pesanan = DB::selectOne($sql, [
        'pesanan_id' => $pesanan_id,
    ]);

    if (!$pesanan) {
      return null;
    }

    return new PesananDto(
      pesanan_id: $pesanan->pesanan_id,
      jumlah_file: $pesanan->jumlah_file,
      total_harga: $pesanan->total_harga,
      status_pesanan: $pesanan->status_pesanan,
      diambil_cust: boolval($pesanan->diambil_cust),
      waktu_pesan: new DateTime($pesanan->waktu_pesan),
      waktu_selesai: $pesanan->waktu_selesai ? new DateTime($pesanan->waktu_selesai) : null
    );
  }
}