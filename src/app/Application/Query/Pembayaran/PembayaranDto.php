<?php 

namespace App\Application\Query\Pembayaran;

class PembayaranDto
{
  public function __construct(
    public string $kode_pembayaran,
    public string $metode_pembayaran,
    public ?string $status_pembayaran = null
  ) { }
}