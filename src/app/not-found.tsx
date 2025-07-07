import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-4 text-center">
        <pre className="font-normal text-accent whitespace-pre sm:text-sm">
          {
            `
  ████████████████
  ██          ██  ██
  ██          ██    ██
  ██    ██    ██      ██
  ██    ██    ██████████
  ██                  ██
  ██                  ██
  ██                  ██
  ██      ██████      ██
  ██    ██      ██    ██
  ██                  ██
  ▓▓▓▓██████████████████

`}
        </pre>
        <p className="text-gray-400 text-xl">You&apos;ve strayed off the map. Not all who wander are lost, but…</p>
        <Link
          href='/'
          className="inline-block text-gray-400 hover:text-accent transition-colors text-lg animate-bounce">
          {"-> return home"}
        </Link>
      </div>
    </div>
  )
}
