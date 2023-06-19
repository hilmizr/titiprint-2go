<?php 

namespace App\Application\Query\Pesanan;

interface PesananQueryInterface
{
  public function execute(string $pesanan_id) : ?PesananDto;
}