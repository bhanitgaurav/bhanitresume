export default function Footer() {
    return (
        <footer className="bg-muted py-8 mt-20">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p>© {new Date().getFullYear()} Bhanit Gaurav. All rights reserved.</p>
            </div>
        </footer>
    );
}
