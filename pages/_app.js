import '@/styles/globals.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
const queryClient = new QueryClient();
import { UserProvider } from '@auth0/nextjs-auth0/client';



export default function App({ Component, pageProps }) {
  return( 
    <UserProvider>

      <QueryClientProvider client={queryClient}>
      <Component {...pageProps}/>
      </QueryClientProvider>

    </UserProvider>
   )
}
