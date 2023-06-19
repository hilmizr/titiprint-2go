<?php 

namespace App\Application\Query\Pengiriman;

interface PengirimanQueryInterface
{
  public function execute(string $pengiriman_id) : ?PengirimanDto;
}