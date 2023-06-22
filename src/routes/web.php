<?php

use App\Http\Controllers\PesananController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    }

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    }

    return redirect()->route('login');
});


// Route::get('/', function () {
//     return Inertia::render('Homepage', [
//         'title' => 'Titiprint',
//         'description' => 'Selamat datang di Titiprint'
//     ]);
// });

Route::get('/home', function () {
    return Inertia::render('Homepage', [
        'title' => 'Titiprint',
        'description' => 'Selamat datang di Titiprint'
    ]);
});
// ->middleware(['auth', 'verified'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::patch('/profile', [ProfileController::class, 'updateMember'])->name('profile.updateMember');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/pesan/riwayat', [PesananController::class, 'index'])->name('pesan');
    Route::get('/pesan/create', [PesananController::class, 'create'])->name('pesan.create');
    Route::post('/pesan', [PesananController::class, 'store'])->name('pesan.store');
    
    Route::get('/bayar', function () {
        return Inertia::render('bayar');
    })->middleware(['auth'])->name('bayar');
    
    Route::get('/membayar', function () {
        return Inertia::render('membayar');
    });
    
    Route::get('/pesan', function () {
        return Inertia::render('Pesan');
    });
});

require __DIR__.'/auth.php';
