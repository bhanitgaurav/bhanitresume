export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        // Only run on server side
        const PING_INTERVAL = 14 * 60 * 1000; // 14 minutes (Render sleeps after 15)

        // We need to use a dynamic import or similar to avoid build-time execution issues if needed,
        // but for simple fetch it's fine. However, we need the base URL.
        // In production, we can use the provided URL or fallback.

        const pingSelf = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bhanit.com"; // Fallback to production domain
                // If running locally, we might not want to ping, or use localhost
                const url = `${baseUrl}/api/ping`;

                console.log(`[Keep-Alive] Pinging ${url}...`);
                const response = await fetch(url);
                if (response.ok) {
                    console.log(`[Keep-Alive] Ping successful: ${response.status}`);
                } else {
                    console.error(`[Keep-Alive] Ping failed: ${response.status}`);
                }
            } catch (error) {
                console.error("[Keep-Alive] Ping error:", error);
            }
        };

        // Initial ping after a short delay to allow server startup
        setTimeout(pingSelf, 10000);

        // Periodic ping
        setInterval(pingSelf, PING_INTERVAL);
    }
}
