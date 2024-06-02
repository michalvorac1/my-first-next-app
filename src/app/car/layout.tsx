import '../globals.css'
export const metadata = {
  title: 'Simple Car App by Michal Vorac',
  description: 'A simple Next.js app that lists cars and show their detail. Ft. Prisma as a DB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
