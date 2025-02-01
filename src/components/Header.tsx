import React from "react";
import MerchantLogo from "./MerchantLogo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-[14px] px-[24px] align-center">
      <div className="left-side flex gap-[48px] align-center">
        <MerchantLogo />
        <nav>
          <ul className="flex gap-[32px] text-[#868898] text-[16px]">
            <Link href="/">Dashboard</Link>
            <Link href="/">Orders</Link>
            <Link href="/">Products</Link>
            <Link href="/">Withdrawal</Link>
            <Link href="/">Settings</Link>
          </ul>
        </nav>
      </div>
      <div className="right-side"></div>
    </header>
  );
}
