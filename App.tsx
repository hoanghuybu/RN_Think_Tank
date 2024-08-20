import MainNavigation from "@navigation";
import { Suspense } from "react";
import {
  initialWindowMetrics,
  SafeAreaProvider
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Suspense fallback={null}>
        <MainNavigation />
      </Suspense>
    </SafeAreaProvider>
  );
}
