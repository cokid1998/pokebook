import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/components/Base/Header";
import Content from "@/components/Base/Content";
import { Suspense } from "react";
import Skeleton from "@/components/Skeleton/Skeleton";
import { DarkModeProvider } from "@/Context/DarkModeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <Header />
        <Suspense fallback={<Skeleton />}>
          <Content />
        </Suspense>
      </DarkModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
