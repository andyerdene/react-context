import "@/styles/globals.css";
import { QuestionProvider } from "@/context/QuestionContext";
import ThemeProvider from "@/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <QuestionProvider>
        <Component {...pageProps} />
      </QuestionProvider>
    </ThemeProvider>
  );
}
