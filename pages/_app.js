import '../styles/globals.css'
import '../styles/All.scss'
import { QueryClientProvider, QueryClient } from 'react-query'
import {Layout, Navbar} from '../components/index'
import { Provider } from 'react-redux'
import { store } from './../Redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {

   return(
      <>
      <Provider store={store}>
         <ToastContainer 
         position="bottom-left"
         autoClose={1500}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover/>

             <QueryClientProvider client={queryClient}>
        <header>
        <Navbar />
      </header>
            <Layout>
    <Component {...pageProps} />
            </Layout >
        </QueryClientProvider>
      </Provider>
        
        
          
        
    </>
   
   )
 
 
 

  
}

export default MyApp






