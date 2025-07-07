const currentYear = new Date().getFullYear();

export function Footer() {
    return (
        <footer className="mt-12 flex items-center justify-between text-gray-500">&copy; {currentYear} | Harshavardhan Vadluri</footer>
    )
}
