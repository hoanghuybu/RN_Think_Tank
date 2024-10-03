import MainNavigation from "@navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider
} from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Suspense fallback={null}>
            <MainNavigation />
          </Suspense>
        </SafeAreaProvider>
      </QueryClientProvider>
      <Toast />
    </>
  );
}
