<?php 

namespace App\Application\Query\File;

class FileDto
{
  public function __construct(
    public string $file_id,
    public string $nama_file,
    public int $sub_total_harga
  ) { }
}