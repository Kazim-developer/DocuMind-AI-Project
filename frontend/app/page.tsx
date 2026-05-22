import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function HomePage() {
  return (
    <main className="flex h-screen bg-zinc-950 text-zinc-100">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Navbar />

        <div className="flex flex-1 flex-col overflow-hidden">
          <ChatWindow />
          <ChatInput />
        </div>
      </section>
    </main>
  );
}
