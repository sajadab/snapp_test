import type {AppProps} from 'next/app'

import {Vazirmatn} from 'next/font/google'
import {Provider} from "react-redux";
import {store} from "../core/redux/store";

const vazir = Vazirmatn({subsets: ['arabic']});

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Provider store={store}>
            <main className={vazir.className}>
                <Component {...pageProps} />
            </main>
        </Provider>
    </>
}

export default MyApp
