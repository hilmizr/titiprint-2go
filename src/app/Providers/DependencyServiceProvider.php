<?php 

namespace App\Providers;

use App\Application\Query\File\FileQueryInterface;
use App\Application\Query\Pembayaran\PembayaranQueryInterface;
use App\Application\Query\Pengiriman\PengirimanQueryInterface;
use App\Application\Query\Pesanan\PesananQueryInterface;
use app\Infrastructure\Query\FileQuery;
use app\Infrastructure\Query\PembayaranQuery;
use app\Infrastructure\Query\PengirimanQuery;
use App\Infrastructure\Query\PesananQuery;
use Illuminate\Support\ServiceProvider;

class DependencyServiceProvider extends ServiceProvider
{
  public function register()
  {
    // Query
    $this->app->bind(PesananQueryInterface::class, PesananQuery::class);
    $this->app->bind(FileQueryInterface::class, FileQuery::class);
    $this->app->bind(PembayaranQueryInterface::class, PembayaranQuery::class);
    $this->app->bind(PengirimanQueryInterface::class, PengirimanQuery::class);
  }
}