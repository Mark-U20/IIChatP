import { useState, createContext } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
import { Dashboard } from "./pages/Dashboard";

interface ConversationIdContextProps {
  conversationId: number;
  setConversationId: React.Dispatch<React.SetStateAction<number>>;
}

const ConversationIdContext = createContext<ConversationIdContextProps | undefined>(undefined);
function App() {

  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");
  //
  // async function greet() {
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  //keeping track of the conversation id
  const [conversationId, setConversationId] = useState<number>(0);


  return (
    <>
      <ConversationIdContext.Provider value={{ conversationId, setConversationId }}>
        <Dashboard />
      </ConversationIdContext.Provider>
    </>
  );
}

export default App;
