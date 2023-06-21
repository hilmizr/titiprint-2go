import { Link } from "@inertiajs/react";
import styles from "./CustomButton.module.css";

export default function CustomButton({
    className = "",
    disabled,
    href,
    method,
    as,
    children,
    ...props
}) {
    if (href) {
        return (
            <Link href={href} method={method} as={as}>
                <a
                    {...props}
                    className={`${styles.button} ${disabled && "opacity-25"
                        } ${className}`}
                    disabled={disabled}
                >
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <button
            {...props}
            className={`${styles.button} ${disabled && "opacity-25"
                } ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
