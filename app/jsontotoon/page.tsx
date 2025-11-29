export default function JsonToToonPage() {
    return (
        <div className="w-full h-screen bg-background overflow-hidden">
            <iframe
                src="https://free-json-to-toon.vercel.app"
                className="w-full h-full border-none"
                title="JSON to TOON"
                allow="accelerometer; autoplay; clipboard-read; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}
