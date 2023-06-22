import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Head } from "@inertiajs/react";

export default function Membayar({auth}) {

    const submit = (e) => {
        e.preventDefault();

        post(route(""));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-extrabold text-4xl text-white leading-tight">
                    Form Bukti pembayaran
                </h2>
            }
        >
            <Head title="Form Bukti Pembayaran - Titiprint" />
            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 lg:pt-2 bg-neutral-800 outline outline-4 outline-pink-700 shadow sm:rounded-lg">
                <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                                <InputLabel
                                    htmlFor="nama_file"
                                    value="Kode Pesanan"
                                    className="text-neutral-100 text-xl mb-4"
                                />
                                <input
                                    type="text"
                                    name="nama_file"
                                    id="nama_file"
                                    className="mt-1 block w-full text-pink-600"
                                />
                                <InputError className="mt-2" />
                            </div>
                    <div>
                                        <InputLabel
                                            htmlFor="metode_pembayaran"
                                            value="Pilih jenis pembayaran"
                                            className="text-neutral-100 text-xl mb-4"
                                        />
                                        <select
                                            name="metode_pembayaran"
                                            id="metode_pembayaran"
                                        >
                                            <option value="qris">Qris</option>
                                            <option value="bankbca">Bank (BCA)</option>
                                            <option value="bankmandiri">Bank (Mandiri)</option>
                                        </select>
                                        <InputError className="mt-2" />
                                    </div>
                    <div>
                                    <InputLabel
                                        htmlFor="upload"
                                        value="Upload File bukti pembayaran"
                                        className="text-neutral-100 text-xl mb-4 mt-7"
                                    />
                                    <input type="file" name="upload" id="upload" />
                                    <InputError className="mt-2" />
                    </div>
                    <div className="flex justify-center">
                                    <PrimaryButton className="ml-4 bg-pink-600 hover:bg-pink-700">
                                        Kirim
                                    </PrimaryButton>
                    </div>
                </form>
                </div>
                </div>
            </div>
        </AuthenticatedLayout>
 );
}