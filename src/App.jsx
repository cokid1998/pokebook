import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/components/Base/Header";
import Content from "@/components/Base/Content";
import { Suspense, useState } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";

const queryClient = new QueryClient();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Suspense fallback={<Skeleton />}>
          <Content />
        </Suspense>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
