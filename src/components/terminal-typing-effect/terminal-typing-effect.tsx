import './styles.css'

export function TerminalTypingEffect() {
  const text =
    'I like Naruto, Demon Slayer, Tokyo Revengers and Attack On Titan.'

  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="mt-20 flex h-[500px] w-[800px] flex-col gap-5 rounded-lg bg-sky-950 p-4">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>

        <div
          className="typing-text text-white"
          style={
            {
              '--length': text.length,
            } as React.CSSProperties
          }
        >
          {text}
        </div>
      </div>
    </div>
  )
}
