import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Bhanit Portfolio",
        short_name: "Bhanit",
        description: "Portfolio of Bhanit Gaurav, Mobile App Developer",
        start_url: "/",
        display: "standalone",
        background_color: "#020617",
        theme_color: "#020617",
        icons: [
            {
                src: "/icon",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
