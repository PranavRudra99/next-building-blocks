import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '../scss/main.scss'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <MantineProvider defaultColorScheme='dark'>
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
