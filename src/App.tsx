import { useRef } from "react";
import { MainLayout } from "./Layouts/Main";
import { Header, WrappedComponentRef } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  const ref = useRef<WrappedComponentRef>();
  return (
    <MainLayout>
      <Header message="Hello world" ref={ref} />
      <Sidebar />
      <main>main</main>
    </MainLayout>
  );
}

export default App;
