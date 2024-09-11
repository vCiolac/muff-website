import { SeoInterface } from "@/interfaces/SeoInterface";
import Head from "next/head";

const Seo = ({ title, description }: SeoInterface) => {
    return (
        <Head>
            <meta name="author" content="Victor Ciolac" />
            <meta name="keywords" content="Javascript" />
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <title>{title}</title>

            <link rel="shortcut icon" href="/favicon.webp" type="x-icon" />
            <link rel="icon" href="/favicon32x32.webp" sizes="32x32" />
            <link rel="icon" href="/favicon48x48.webp" sizes="48x48" />
            <link rel="icon" href="/favicon96x96.webp" sizes="96x96" />
            <link rel="icon" href="/favicon144x144.webp" sizes="144x144" />
            <link rel="icon" href="/favicon512x512.webp" sizes="512x512" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="cmtrat" />
            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content="https://www.cmtrat.com.br/" />
            <meta property="og:image:alt" content={description} />
            <meta property="og:image" content="/logo.png" />

            <meta property="al:ios:app_name" content="cmtrat" />
            <meta property="al:ios:url" content="https://www.cmtrat.com.br/" />
            <meta property="al:android:app_name" content="cmtrat" />
            <meta property="al:android:url" content="https://www.cmtrat.com.br/" />

            <link rel="canonical" href="https://www.cmtrat.com.br/" />
            <link rel="manifest" href={"/manifest.webmanifest"} />

            <meta name="theme-color" content="#7A90FF" />
            <meta name="msapplication-TileColor" content="#7A90FF" />
            <meta name="msapplication-navbutton-color" content="#7A90FF" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#7A90FF" />
            
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;
