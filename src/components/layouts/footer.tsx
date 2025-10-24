
export default function Footer() {
    return (
        <footer className="bg-[#0f1012] border-t border-[#7f8489] py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground font-mono text-sm">
                        © {new Date().getFullYear()} <span className="text-primary">Abdelhadi Nachit</span> - Full-Stack Developer
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Built with React, TypeScript & Tailwind CSS
                    </p>
                </div>
                </div>
            </div>
        </footer>
    )
}
