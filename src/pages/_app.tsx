import type { AppProps } from "next/app";
import WebLayout from "@/components/layout/WebLayout";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebLayout>
      <Component {...pageProps} />
    </WebLayout>
  );
}
