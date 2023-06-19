<?php 

namespace app\Infrastructure\Query;

use App\Application\Query\Pengiriman\PengirimanDto;
use App\Application\Query\Pengiriman\PengirimanQueryInterface;
use Illuminate\Support\Facades\DB;

class PengirimanQuery implements PengirimanQueryInterface
{
  public function execute(string $pengiriman_id): ?PengirimanDto
  {
    $sql = "SELECT p.pengiriman_id
                    , p.no_pengiriman
                    , p.alamat_tujuan
                    , p.status_pengiriman
                FROM pengiriman p
                WHERE p.pengiriman_id = :pengiriman_id";

    $pengiriman = DB::selectOne($sql, [
        'pengiriman_id' => $pengiriman_id,
    ]);

    if (!$pengiriman) {
      return null;
    }

    return new PengirimanDto(
      pengiriman_id: $pengiriman->pengiriman_id,
      no_pengiriman: $pengiriman->no_pengiriman,
      alamat_tujuan: $pengiriman->alamat_tujuan,
      status_pengiriman: $pengiriman->status_pengiriman ? $pengiriman->status_pengiriman : null
    );
  }
}