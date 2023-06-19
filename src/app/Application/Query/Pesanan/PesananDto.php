<?php 

namespace App\Application\Query\Pesanan;

use DateTime;

class PesananDto
{
  public string $pesanan_id;
  public int $jumlah_file;
  public int $total_harga;
  public string $status_pesanan;
  public bool $diambil_cust;
  public string $waktu_pesan;
  public ?string $waktu_selesai;

  public function __construct(
    string $pesanan_id,
    int $jumlah_file,
    int $total_harga,
    string $status_pesanan,
    bool $diambil_cust,
    DateTime $waktu_pesan,
    ?DateTime $waktu_selesai
  ) {
    $this->pesanan_id = $pesanan_id;
    $this->jumlah_file = $jumlah_file;
    $this->total_harga = $total_harga;
    $this->status_pesanan = $status_pesanan;
    $this->diambil_cust = $diambil_cust;
    $this->waktu_pesan = $waktu_pesan->format('Y-m-d H:i:s');
    $this->waktu_selesai = $waktu_selesai ? $waktu_selesai->format('Y-m-d H:i:s') : null;
  }
}