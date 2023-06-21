import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Head } from "@inertiajs/react";

export default function Pesan({ auth }) {
    // const file = usePage().props.auth.file;

    // const { data, setData, post, errors, processing, recentlySuccessful } =
    //     useForm({
    //         nama_file: file.nama_file,
    //     });

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

            {/* <div className="py-5 w-10/12 pl-9"> */}
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
                                    htmlFor="url"
                                    value="File URL"
                                    className="text-neutral-100"
                                />
                                <TextInput
                                    id="url"
                                    className="mt-1 block w-full text-pink-600"
                                    required
                                    isFocused
                                    autoComplete="url"
                                />
                                <InputError className="mt-2" />
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <InputLabel
                                        htmlFor="format_file"
                                        value="Format File"
                                        className="text-neutral-100"
                                    />
                                    <select name="format_file" id="format_file">
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
                                    />
                                    <InputError className="mt-2" />
                                </div>

                                <div className="ml-24">
                                    <InputLabel
                                        htmlFor="tinta"
                                        value="Tinta"
                                        className="text-neutral-100"
                                    />
                                    <input
                                        type="radio"
                                        id="berwarna"
                                        name="tinta"
                                        value="berwarna"
                                    />
                                    <label
                                        for="berwarna"
                                        className="text-white text-lg"
                                    >
                                        &nbsp; Berwarna
                                    </label>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <input
                                        type="radio"
                                        id="hitam_putih"
                                        name="tinta"
                                        value="hitam_putih"
                                    />
                                    <label
                                        for="hitam_putih"
                                        className="text-white text-lg"
                                    >
                                        &nbsp; Hitam Putih
                                    </label>
                                    <br></br>
                                    <InputError className="mt-2" />
                                </div>

                                <div>
                                    <input type="hidden" name="" />
                                </div>
                                <div>
                                    <input type="hidden" name="" />
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
