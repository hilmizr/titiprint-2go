<?php 

namespace App\Application\Query\Pembayaran;

interface PembayaranQueryInterface
{
  public function execute(string $kode_pembayaran) : ?PembayaranDto;
}