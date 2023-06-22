import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Head } from "@inertiajs/react";

export default function Pesan({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_file: "",
        format: "",
        jenis_kertas: "",
        ukuran_kertas: "",
        jumlah_copy: "",
        is_berwarna: "",
        keterangan: "",
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("pesan.store"));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-extrabold text-4xl text-white leading-tight">
                    Pesan Jasa di Sini!
                </h2>
            }
        >
            <Head title="Pesan - Titiprint" />

            <div className="py-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 lg:pt-2 bg-neutral-800 outline outline-4 outline-pink-700 shadow sm:rounded-lg">
                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel
                                    htmlFor="upload"
                                    value="Upload File"
                                    className="text-neutral-100"
                                />
                                <input type="file" name="upload" id="upload" />
                                <InputError className="mt-2" />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="nama_file"
                                    value="URL File"
                                    className="text-neutral-100"
                                />
                                <input
                                    type="text"
                                    name="nama_file"
                                    id="nama_file"
                                    className="mt-1 block w-full text-pink-600"
                                    value={data.nama_file}
                                    onChange={handleOnChange}
                                />
                                <InputError className="mt-2" />
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <InputLabel
                                        htmlFor="format"
                                        value="Format File"
                                        className="text-neutral-100"
                                    />
                                    <select
                                        value={data.format}
                                        onChange={handleOnChange}
                                        name="format"
                                        id="format"
                                    >
                                        <option value="docx">
                                            Format docx
                                        </option>
                                        <option value="xlsx">
                                            Format xlsx
                                        </option>
                                        <option value="pdf">Format pdf</option>
                                    </select>
                                    <InputError className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="jenis_kertas"
                                        value="Jenis Kertas"
                                        className="text-neutral-100"
                                    />
                                    <select
                                        value={data.jenis_kertas}
                                        onChange={handleOnChange}
                                        name="jenis_kertas"
                                        id="jenis_kertas"
                                    >
                                        <option value="hvs">Kertas HVS</option>
                                        <option value="karton">
                                            Kertas Karton
                                        </option>
                                        <option value="dupleks">
                                            Kertas Dupleks
                                        </option>
                                    </select>
                                    <InputError className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="ukuran_kertas"
                                        value="Ukuran Kertas"
                                        className="text-neutral-100"
                                    />
                                    <select
                                        value={data.ukuran_kertas}
                                        onChange={handleOnChange}
                                        name="ukuran_kertas"
                                        id="ukuran_kertas"
                                    >
                                        <option value="A4">Ukuran A4</option>
                                        <option value="A5">Ukuran A5</option>
                                        <option value="B4">Ukuran B4</option>
                                        <option value="B5">Ukuran B5</option>
                                        <option value="F4">Ukuran F4</option>
                                    </select>
                                    <InputError className="mt-2" />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <InputLabel
                                        htmlFor="jumlah_copy"
                                        value="Jumlah Copy"
                                        className="text-neutral-100"
                                    />
                                    <input
                                        type="number"
                                        min="1"
                                        name="jumlah_copy"
                                        id="jumlah_copy"
                                        value={data.jumlah_copy}
                                        onChange={handleOnChange}
                                    />
                                    <InputError className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="tinta"
                                        value="Tinta"
                                        className="text-neutral-100"
                                    />
                                    <select
                                        value={data.is_berwarna}
                                        onChange={handleOnChange}
                                        name="is_berwarna"
                                        id="is_berwarna"
                                    >
                                        <option value="hitam_putih">
                                            Hitam Putih
                                        </option>
                                        <option value="berwarna">
                                            Berwarna
                                        </option>
                                    </select>

                                    <InputError className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="keterangan"
                                        value="Keterangan"
                                        className="text-neutral-100"
                                    />
                                    <TextInput
                                        id="keterangan"
                                        name="keterangan"
                                        className="mt-1 block w-full text-pink-600"
                                        value={data.keterangan}
                                        onChange={handleOnChange}
                                        isFocused
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <PrimaryButton className="ml-4 bg-pink-600 hover:bg-pink-700">
                                    Pesan
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
