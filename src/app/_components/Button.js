"use client";

import Link from "next/link";

const variants = {
  primary: "bg-[#025cb1] hover:bg-[#002b5bff]",
  secondary: "bg-blue-800 hover:bg-[#4639a6]",
  link: "bg-[#002b5b] hover:bg-blue-900",
};

function ActionButton({
  icon: Icon,
  label,
  onClick,
  href,
  variant = "primary",
  showOnMobile = true,
}) {
  const baseClasses =
    "flex items-center gap-2 px-8 py-3 rounded-xl text-white justify-center duration-300 transition-all";
  const visibilityClass = showOnMobile ? "" : "hidden md:block";

  const content = (
    <div className={`${baseClasses} ${variants[variant]} ${visibilityClass}`}>
      {label && <span className="font-bold">{label}</span>}
      {Icon && <Icon />}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return <button onClick={onClick}>{content}</button>;
}

export default ActionButton;
