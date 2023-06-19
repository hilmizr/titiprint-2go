<?php 

namespace app\Infrastructure\Query;

use App\Application\Query\File\FileDto;
use App\Application\Query\File\FileQueryInterface;
use Illuminate\Support\Facades\DB;

class FileQuery implements FileQueryInterface
{
  public function execute(string $file_id): ?FileDto
  {
    $sql = "SELECT f.file_id
                    , f.nama_file
                    , f.sub_total_harga
                FROM file f
                WHERE p.file_id = :file_id";

    $file = DB::selectOne($sql, [
        'file_id' => $file_id,
    ]);

    if (!$file) {
      return null;
    }

    return new FileDto(
      file_id: $file->file_id,
      nama_file: $file->nama_file,
      sub_total_harga: $file->sub_total_harga
    );
  }
}