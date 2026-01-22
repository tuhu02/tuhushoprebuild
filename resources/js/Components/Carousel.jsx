import { useState, useEffect } from "react";

const slides = [
    { url: "/images/Carousel/slide1.jpg", title: "Slide 1" },
    { url: "/images/Carousel/slide2.jpg", title: "Slide 2" },
    { url: "/images/Carousel/slide3.jpg", title: "Slide 3" },
];

export default function Carousel() {
    // Kita mulai dari angka yang besar agar bisa geser ke kiri sejak awal
    const [currentIndex, setCurrentIndex] = useState(slides.length * 10);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    useEffect(() => {
        const timer = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    // Kalkulasi tetap menggunakan 800px sesuai keinginanmu
                    // 400px adalah offset agar tepat di tengah (800 / 2)
                    transform: `translateX(calc(-${currentIndex * 800}px + 50% - 400px))`,
                }}
            >
                {/* Kita render slides secara berulang (misal 100 kali) agar terlihat infinite */}
                {[...Array(100)].map((_, i) => {
                    const slideIndex = i % slides.length;
                    const isActive = i === currentIndex;
                    
                    return (
                        <div
                            key={i}
                            className="shrink-0 px-4 transition-all duration-500"
                            style={{ width: "800px" }}
                        >
                            <div
                                className={`relative transition-all duration-500 overflow-hidden rounded-2xl shadow-xl
                                    ${isActive 
                                        ? "scale-100 opacity-100 z-10" 
                                        : "scale-90 opacity-40 z-0 blur-[1px]"
                                    }`}
                            >
                                <img
                                    src={slides[slideIndex].url}
                                    alt={slides[slideIndex].title}
                                    className="w-full h-[350px] object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Tombol Navigasi */}
            <button onClick={prevSlide} className="absolute left-10 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white hover:bg-white/40 z-20">❮</button>
            <button onClick={nextSlide} className="absolute right-10 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full text-white hover:bg-white/40 z-20">❯</button>

            {/* Indikator Dots */}
            <div className="flex justify-center gap-3 mt-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index + (Math.floor(currentIndex / slides.length) * slides.length))}
                        className={`transition-all duration-300 h-2 rounded-full ${
                            (currentIndex % slides.length) === index ? "w-10 bg-yellow-400" : "w-3 bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}