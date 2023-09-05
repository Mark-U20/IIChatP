import {MessageBox, MessageDisplay} from '../components/Message'
export const Dashboard = () => {
  return (
    <div className="container">
      <h1>Welcome to IICHATP</h1>

      <MessageDisplay />
      <MessageBox />

    </div>
  );
};
