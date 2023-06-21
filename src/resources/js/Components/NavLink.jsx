import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "border-transparent text-neutral-100 hover:text-white hover:border-gray-300 focus:text-neutral-300 focus:border-gray-300"
                    : "border-transparent text-neutral-100 hover:text-white hover:border-gray-300 focus:text-neutral-300 focus:border-gray-300") +
                className
            }
        >
            {children}
        </Link>
    );
}
