import '../styles/globals.css'
import { ThemeProvider } from 'nextra-theme-docs'
import config from '../theme.config'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider config={config}>
      <div className="mdx-content">
        <Component {...pageProps} />
      </div>
      <footer>
        {config.footer()}
      </footer>
    </ThemeProvider>
  )
}
