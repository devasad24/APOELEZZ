"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children, links }) {
    const pathname = usePathname();

    // Check if current route starts with /admin
    const isAdminRoute = pathname?.startsWith("/admin");
    console.log("isAdminRoute", isAdminRoute);

    if (isAdminRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar links={links} />
            {children}
            <Footer links={links} />
        </>
    );
}