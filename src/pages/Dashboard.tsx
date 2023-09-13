import { MessageBox, MessageDisplay } from "../components/Message";
import { ConversationList } from "../components/Conversation";
import "./Dashboard.css";
export const Dashboard = () => {
  return (
    <div className="main-container">
      <div id="sidebar">
        <ConversationList />
      </div>
      <div id="main">
        <MessageDisplay />
        <MessageBox />
      </div>
    </div>
  );
};
