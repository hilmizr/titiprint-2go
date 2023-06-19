<?php 

namespace app\Infrastructure\Query;

use App\Application\Query\Pembayaran\PembayaranDto;
use App\Application\Query\Pembayaran\PembayaranQueryInterface;
use Illuminate\Support\Facades\DB;

class PembayaranQuery implements PembayaranQueryInterface
{
  public function execute(string $kode_pembayaran): ?PembayaranDto
  {
    $sql = "SELECT p.kode_pembayaran
                    , p.metode_pembayaran
                    , p.status_pembayaran
                FROM pembayaran p
                WHERE p.kode_pembayaran = :kode_pembayaran";

    $pembayaran = DB::selectOne($sql, [
        'kode_pembayaran' => $kode_pembayaran,
    ]);

    if (!$pembayaran) {
      return null;
    }

    return new PembayaranDto(
      kode_pembayaran: $pembayaran->kode_pembayaran,
      metode_pembayaran: $pembayaran->metode_pembayaran,
      status_pembayaran: $pembayaran->status_pembayaran ? $pembayaran->status_pembayaran : null
    );
  }
}