import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import CustomButton from "@/Components/CustomButton";
import { Link, usePage } from "@inertiajs/react"; // Import usePage from @inertiajs/react

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    // Access the current page using usePage
    const { url } = usePage();

    return (
        <div className="min-h-screen bg-[#00040A]">
            <nav className="bg-[#00040A] border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="#">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                                <p className="text-lg text-white pl-2">TitiPrint</p>
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="space-x-8 sm:-my-px sm:flex">
                                <NavLink href={route("dashboard")}>
                                    Home
                                </NavLink>
                                <NavLink href="#">
                                    Cek Pesanan
                                </NavLink>
                                <NavLink href="#">
                                    Informasi Pembayaran
                                </NavLink>
                            </div>
                            {/* <div className="ml-3 relative flex items-center">
                                <span className="text-white">Username</span>
                            </div> */}
                            <div className="ml-3 relative">
                                <PrimaryButton
                                    href={route("profile.edit")}>
                                    Profile
                                </PrimaryButton>
                            </div>
                            <div className="ml-3 relative">
                                <PrimaryButton
                                    href={route("logout")}
                                    method="post"
                                    as="button">
                                    Logout
                                </PrimaryButton>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                    </div>
                </div>

                {/* Mobile dropdown menu */}
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
