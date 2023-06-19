<?php 

namespace App\Application\Query\Pengiriman;

class PengirimanDto
{
  public function __construct(
    public string $pengiriman_id,
    public int $no_pengiriman,
    public string $alamat_tujuan,
    public ?string $status_pengiriman = null
  ) { }
}