import { Link, usePage } from "@inertiajs/react";

export default function NavLink({
    href,
    className = "",
    children,
    ...props
}) {
    const { url } = usePage();
    const isActive = url === href || (url === "/dashboard" && href === "/");

    return (
        <Link
            href={href}
            className={`inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ${isActive
                ? "border-white text-[#F0007E] hover:text-gray-300 hover:border-gray-300 focus:text-gray-300 focus:border-gray-300"
                : "border-transparent text-neutral-100 hover:text-[#F0007E] focus:text-[#FF66B6]"
                } ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
}
