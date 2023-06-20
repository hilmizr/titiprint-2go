import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-4 sm:pt-0 bg-neutral-800">
            <div>
                <Link href="/" className="flex">
                    <ApplicationLogo className="w-20 h-20 fill-current" />
                    <span className="flex pl-4 text-4xl font-extrabold items-center text-pink-600">
                        <span class="text-white">Titi</span>Print
                    </span>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-neutral-800 outline outline-4 outline-pink-700 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
