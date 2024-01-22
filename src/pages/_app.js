import "@/styles/globals.css";
import { QuestionProvider } from "@/context/QuestionContext";

export default function App({ Component, pageProps }) {
  return (
    <QuestionProvider>
      <Component {...pageProps} />
    </QuestionProvider>
  );
}
