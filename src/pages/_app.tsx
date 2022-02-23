import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import createEmotionCache from '../../styles/createEmotionCache'
import theme from '../theme'

const clientSideEmotionCache = createEmotionCache()
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}

export default MyApp
