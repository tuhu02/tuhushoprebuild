export default function ProductCard({ title, subtitle, image, bgColor }) {
    return (
        <div className={`relative overflow-hidden rounded-2xl p-4 cursor-pointer ${bgColor}`}>
            {/* Layer Efek Garis Diagonal */}
            <div className="absolute inset-0 bg-card-pattern bg-[length:20px_20px] opacity-20"></div>

            <div className="relative z-10 flex items-center gap-4">
                {/* Gambar/Ikon Produk */}
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-md">
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>

                {/* Teks Informasi */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white font-sans leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm text-white/70 font-medium">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}