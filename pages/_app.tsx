import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import store from "../store/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex min-h-screen flex-col w-screen ">
      <Header />
      <div className=" flex flex-1  justify-center ">
        <div className="min-h-full w-full">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyApp;
