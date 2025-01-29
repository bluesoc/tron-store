export default function Footer() {
    return <>
        <div className="flex flex-col">
            <footer className="bg-gray-800 h-22 flex flex-col items-center justify-center text-white">
                <p className="text-base font-medium pb-2">
                    <a href="https://github.com/bluesoc/tron-store" className="hover:underline">Source Code</a>
                </p>
                <p className="text-base font-medium">
                    &copy; 2025 <a href="https://github.com/bluesoc" className="hover:underline">Renan Dev</a>
                </p>
            </footer>
        </div>
    </>
}
