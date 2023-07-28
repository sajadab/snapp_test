import {Head, Html, Main, NextScript} from 'next/document'
import {useTranslation} from "react-i18next";

export default function Document() {
    const { t } = useTranslation();
    return (
        <Html lang="fa" dir={"rtl"}>
            <Head>
                <title>{t('snappTest')}</title>
                <meta name={"description"} content={t('snappTestDesc')} />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
