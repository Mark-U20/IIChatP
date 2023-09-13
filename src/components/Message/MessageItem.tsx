interface MessageItemProps {
  key: string;
  message: string;
  sender: string;
  timestamp: string;
}

export const MessageItem = ({
  key,
  message,
  sender,
  timestamp,
}: MessageItemProps) => {
  return (
    <div key={key} className="message-item">
      <h1>{sender}</h1>
      <p>{message}</p>
      <p>{timestamp}</p>
    </div>
  );
};
