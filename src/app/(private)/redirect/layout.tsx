export const metadata = {
  title: "Redirect",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
