import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from '../store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    //react-redux offre il componente <Provider>
    //tramite il quale possiamo connettere lo store.
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  )
}
