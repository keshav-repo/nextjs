'use client';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <html>
            <body>
                <h2>Something went wrong Try after some time!</h2>
            </body>
        </html>
    )
}
