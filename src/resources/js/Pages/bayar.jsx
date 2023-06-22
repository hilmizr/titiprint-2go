import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Head } from "@inertiajs/react";
import Qris from "../../../public/assets/img/Qris_image.png"

export default function Bayar({auth}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-extrabold text-4xl text-white leading-tight">
                    Informasi Pembayaran
                </h2>
            }
        >
            <Head title="Informasi Pembayaran - Titiprint" />
            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                {/* <ul class="flex border-b">
                <li class="-mb-px mr-1">
                    <a class="bg-neutral-800 inline-block py-2 px-4 text-white font-semibold hover:border-l hover:border-t hover:border-r border-pink-700 hover:text-pink-500 rounded-t" href="#">Qris</a>
                </li>
                <li class="mr-1">
                    <a class="bg-neutral-800 inline-block py-2 px-4 text-white font-semibold hover:border-l hover:border-t hover:border-r border-pink-700 hover:text-pink-500 rounded-t" href="#">Bank (BCA)</a>
                </li>
                <li class="mr-1">
                    <a class="bg-neutral-800 inline-block py-2 px-4 text-white font-semibold hover:border-l hover:border-t hover:border-r border-pink-700 hover:text-pink-500 rounded-t" href="#">Bank (Mandiri)</a>
                </li>
                </ul> */}
                <div className="p-4 sm:p-8 lg:pt-2 bg-neutral-800 outline outline-4 outline-pink-700 shadow sm:rounded-lg">
                <big class ="text-center mb-2 text-pink-600 text-3xl">Metode Qris</big>
                <img
                    src={Qris}
                    class="max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800 items-center mb-5 mt-5"
                    alt="..." />
                    <small class="text-center mb-2 text-white text-xl">Qris Titiprint</small>
                    <ol class="text-white text-lg mt-2 mb-10">
                        <li>1. Scan barcode di atas</li>
                        <li>2. Masukkan nominal uang yang ingin di transfer</li>
                        <li>3. Pilih "Kirim"</li>
                        <li>4. Simpan bukti transfer</li>
                        <li>
                        5. Cari pesanan anda pada menu
                        <span class=""> Cek Pesanan</span>
                        </li>
                        <li>6. Upload bukti pembayaran</li>
                    </ol> 
                    <big class ="text-center mb-10 mt-10 text-pink-600 text-3xl">Metode Bank (BCA)</big>
                    <ol class="text-white text-lg mt-2 mb-10">
                        <li>1. Pilih menu transfer</li>
                        <li>2. Masukkan nomer rekening 8735089123</li>
                        <li>3. Masukkan nominal uang yang ingin di transfer melalui ATM BCA.</li>
                        <li>4. Jika semua proses telah selesai dan benar, pilih “Ya”.</li>
                        <li>5. Tunggu bukti transfer keluar</li>
                        <li>
                        6. Cari pesanan anda pada menu
                        <span class=""> Cek Pesanan</span>
                        </li>
                        <li>7. Upload bukti pembayaran</li>
                    </ol> 
                    <big class ="text-center mb-10 mt-10 text-pink-600 text-3xl">Metode Bank (Mandiri)</big>
                    <ol class="text-white text-lg mt-2 mb-5">
                        <li>1. Pilih menu transfer</li>
                        <li>2. Masukkan nomer rekening 1370005634738</li>
                        <li>3. Masukkan nominal uang yang ingin di transfer melalui ATM BCA.</li>
                        <li>4. Jika semua proses telah selesai dan benar, pilih “Ya”.</li>
                        <li>5. Tunggu bukti transfer keluar</li>
                        <li>
                        6. Cari pesanan anda pada menu
                        <span class=""> Cek Pesanan</span>
                        </li>
                        <li>7. Upload bukti pembayaran</li>
                    </ol> 
                </div>
                
                </div>
            </div>
        </AuthenticatedLayout>
 );
}