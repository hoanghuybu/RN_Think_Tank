import MainNavigation from "@navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Fragment, Suspense } from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView
} from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { stylesGlobal } from "./stylesGlobal";

const queryClient = new QueryClient();
export default function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <Suspense fallback={null}>
            <SafeAreaView edges={["top"]} style={stylesGlobal.flex1}>
              <MainNavigation />
            </SafeAreaView>
          </Suspense>
        </SafeAreaProvider>
      </QueryClientProvider>
      <Toast />
    </Fragment>
  );
}
