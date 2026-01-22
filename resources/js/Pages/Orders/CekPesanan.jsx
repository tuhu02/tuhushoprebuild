import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/Carousel";

export default function CekPesanan() {
    return (
        <AuthenticatedLayout>
            <Head title="Cek Pesanan" />
            <div className="py-2 overflow-hidden">
                <div className="mx-auto max-w-[1310px] sm:px-6 lg:px-8">
                    <div className="p-2">
                        <Carousel />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}