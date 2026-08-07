// app/admin/layout.js
'use client';

import { usePathname } from 'next/navigation';
import AdminSidebar from './components/AdminSidebar';
import useIsMobile from './_functions/useIsMobile';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const isMobile = useIsMobile();

    const showSidebar = pathname !== '/admin';

    return showSidebar ? (
        <><div className="relative w-full min-h-screen flex text-white"
            style={{
                background: "linear-gradient(to bottom left, rgb(0, 0, 0), rgba(202, 145, 30, 0.6), rgb(0,0,0)"
            }}
        >
            <AdminSidebar />

            <div className={`${isMobile ? "px-4" : "pl-[250px]"} py-4 pr-4 w-full min-h-screen text-white`}>
                <div className="w-full flex flex-col gap-5 p-1">
                    {children}
                </div>
            </div>
        </div>
        </>
    ) : (
        <>{children}</>
    );
}
