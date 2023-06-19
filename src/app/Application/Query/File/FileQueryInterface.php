<?php 

namespace App\Application\Query\File;

interface FileQueryInterface
{
  public function execute(string $file_id) : ?FileDto;
}