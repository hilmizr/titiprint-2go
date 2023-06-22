import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateMember({ className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            is_member: user.is_member,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.updateMember"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-white">
                    Membership Information (Anda sekarang{" "}
                    {data.is_member ? "member" : "bukan member"})
                </h2>

                <p className="mt-1 text-sm text-neutral-200">
                    Update your membership's information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        htmlFor="is_member"
                        value="Member"
                        className="text-neutral-100"
                    />

                    <select
                        id="is_member"
                        name="is_member"
                        className="mt-1 block w-full text-pink-600"
                        value={data.is_member}
                        onChange={(e) => setData("is_member", e.target.value)}
                    >
                        <option value="1">Daftar membership</option>
                        <option value="0">Lepas membership</option>
                    </select>

                    <InputError className="mt-2" message={errors.is_member} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
