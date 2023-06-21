import { Link } from "@inertiajs/react";

export default function PrimaryButton({
  className = "",
  disabled,
  href,
  method,
  as,
  children,
  ...props
}) {
  const buttonStyle = {
    fontFamily: "'Montserrat', sans-serif",
  };

  if (href) {
    return (
      <Link href={href} method={method} as={as}>
        <a
          {...props}
          className={
            `inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-pink-600 hover:bg-pink-700 focus:bg-pink-800 active:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"
            } ` + className
          }
          style={buttonStyle}
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
      className={
        `inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-pink-600 hover:bg-pink-700 focus:bg-pink-800 active:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && "opacity-25"
        } ` + className
      }
      style={buttonStyle}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
