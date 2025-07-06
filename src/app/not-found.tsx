import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-6 text-center">
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
        <p className="text-gray-400">looks like you've wandered into uncharted territory</p>
        <Link
          href='/'
          className="inline-block text-gray-400 hover:text-accent transition-colors">
          {"-> return home"}
        </Link>
      </div>
    </div>
  )
}
