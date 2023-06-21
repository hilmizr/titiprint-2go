import React from "react";
import { ReactDOM } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import InputError from "@/Components/InputError";
// import InputLabel from "@/Components/InputLabel";
// import PrimaryButton from "@/Components/PrimaryButton";
// import TextInput from "@/Components/TextInput";
// import { Link, useForm, usePage } from "@inertiajs/react";
// import { Transition } from "@headlessui/react";
import { Link, Head } from "@inertiajs/react";

export default function Pesan({ auth, props }) {
    // const { data, setData, post, processing, errors, reset } = useForm({
    //     nama_file: "",
    //     format: "",
    //     jenis_kertas: "",
    //     ukuran_kertas: "",
    //     jumlah_copy: "",
    //     is_berwarna: "",
    //     keterangan: "",
    // });

    // const handleOnChange = (event) => {
    //     setData(
    //         event.target.name,
    //         event.target.type === "checkbox"
    //             ? event.target.checked
    //             : event.target.value
    //     );
    // };

    // const submit = (e) => {
    //     e.preventDefault();

    //     post(route("pesan.store"));
    // };

    console.log(props);
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-extrabold text-4xl text-white leading-tight">
                    Riwayat Pesanan
                </h2>
            }
        >
            <Head title="Riwayat Pesanan - Titiprint" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 lg:pt-2 bg-neutral-800 outline outline-4 outline-pink-700 shadow sm:rounded-lg">
                        <table className="text-white w-full">
                            <thead>
                                <tr>
                                    <th className="p-4">Pesanan ID</th>
                                    <th className="p-4">Jumlah File</th>
                                    <th className="p-4">Total Harga</th>
                                    <th className="p-4">Status Pesanan</th>
                                    <th className="p-4">Waktu Pesan</th>
                                    <th className="p-4">Waktu Selesai</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="justify-between mb-20">
                                    <td className="p-4 text-center">
                                        9a9fafd4-e9b1-494f-b20c-fb74cdcd4d8a
                                    </td>
                                    <td className="p-4 text-center">1</td>
                                    <td className="p-4 text-center">2000</td>
                                    <td className="p-4 text-center">Pending</td>
                                    <td className="p-4 text-center">
                                        2023-06-21 15:40:42
                                    </td>
                                    <td className="p-4 text-center">
                                        2023-06-21 16:40:42
                                    </td>
                                </tr>

                                <tr className="justify-between mb-20">
                                    <td className="p-4 text-center">
                                        d4719e51-2c1a-41d0-8389-47a617255cf8
                                    </td>
                                    <td className="p-4 text-center">1</td>
                                    <td className="p-4 text-center">1000</td>
                                    <td className="p-4 text-center">Pending</td>
                                    <td className="p-4 text-center">
                                        2023-06-21 21:05:12
                                    </td>
                                    <td className="p-4 text-center">
                                        2023-06-21 22:05:12
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
