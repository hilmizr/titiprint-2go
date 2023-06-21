import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Head } from "@inertiajs/react";

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
                <ul class="flex border-b">
                <li class="-mb-px mr-1">
                    <a class="bg-neutral-800 inline-block py-2 px-4 text-white font-semibold hover:border-l hover:border-t hover:border-r border-pink-700 hover:text-pink-500 rounded-t" href="#">Qris</a>
                </li>
                <li class="mr-1">
                    <a class="bg-neutral-800 inline-block py-2 px-4 text-white font-semibold hover:border-l hover:border-t hover:border-r border-pink-700 hover:text-pink-500 rounded-t" href="#">Bank (BCA)</a>
                </li>
                <li class="mr-1">
                    <a class="bg-neutral-800 inline-block py-2 px-4 text-white font-semibold hover:border-l hover:border-t hover:border-r border-pink-700 hover:text-pink-500 rounded-t" href="#">Bank (Mandiri)</a>
                </li>
                </ul>
                <div className="p-4 sm:p-8 lg:pt-2 bg-neutral-800 outline outline-4 outline-pink-700 shadow sm:rounded-lg">
                    
                </div>
                
                </div>
            </div>
        </AuthenticatedLayout>
 );
}