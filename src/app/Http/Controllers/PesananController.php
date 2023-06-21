<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Pesanan;
use App\Providers\RouteServiceProvider;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Ramsey\Uuid\Uuid;

class PesananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return Inertia::render('Pesanan/Pesan');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() : Response
    {
        return Inertia::render('Pesanan/Pesan');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_file' => 'required'
        ]);

        $user = Auth::user();
        $pesanan_id = Uuid::uuid4()->toString();
        $file_id = Uuid::uuid4()->toString();
        $jumlah_file = 1;
        $sub_total_harga = intval($request->jumlah_copy) * 1000;
        $total_harga = $jumlah_file * $sub_total_harga;
        $waktu_pesan = new DateTime('now');

        // DB::table('pesanan')->insert([

        // ]);

        // DB::table('file')->insert([
        //     'file_id' => Uuid::uuid4()->toString(),
        //     'nama_file' => $request->nama_file,
        //     'sub_total_harga' => $sub_total_harga,
        //     // 'pesanan_id' => Uuid::uuid4()->toString(),
        // ]);

        Pesanan::create([
            'pesanan_id' => $pesanan_id,
            'jumlah_file' => $jumlah_file,
            'total_harga' => $total_harga,
            'status_pesanan' => "Pending",
            'waktu_pesan' => $waktu_pesan->format('Y-m-d H:i:s'),
            'user_id' => $user->user_id,
        ]);
        
        File::create([
            'file_id' => $file_id,
            'nama_file' => $request->nama_file,
            'sub_total_harga' => $sub_total_harga,
            'pesanan_id' => $pesanan_id,
        ]);

        return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pesanan  $pesanan
     * @return \Illuminate\Http\Response
     */
    public function show(Pesanan $pesanan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pesanan  $pesanan
     * @return \Illuminate\Http\Response
     */
    public function edit(Pesanan $pesanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pesanan  $pesanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pesanan $pesanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pesanan  $pesanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pesanan $pesanan)
    {
        //
    }
}
