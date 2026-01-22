import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Carousel from "@/Components/Carousel";
import ProductCard from '@/Components/ProductCard'; 

export default function Dashboard() {
    const products = [
        {
            title: "Mobile Legends",
            subtitle: "Moonton",
            image: "/images/Carousel/slide1.jpg",
            color: "bg-blue-600",
        },
        {
            title: "Free Fire",
            subtitle: "Garena",
            image: "/images/Carousel/slide2.jpg",
            color: "bg-purple-900",
        },
        {
            title: "PUBG Mobile",
            subtitle: "Tencent Games",
            image: "/images/Carousel/slide3.jpg",
            color: "bg-sky-500",
        },
        {
            title: "Joki Rank Eceran",
            subtitle: "Oura Store",
            image: "/images/Carousel/slide1.jpg",
            color: "bg-orange-500",
        },
    ];
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="p-6">
                            <Carousel />
                        </div>

                        <div className="p-6">
                            <h1 className="text-xl pb-3">🔥POPULER SEKARANG</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        image={item.image}
                                        bgColor={item.color}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
