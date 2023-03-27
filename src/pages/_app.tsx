import WebLayout from "@/components/layout/WebLayout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebLayout>
      <Component {...pageProps} />
    </WebLayout>
  );
}
