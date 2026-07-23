export default function ChatBubble({ chat }) {

  const isBot = chat.type === "bot";

  return (

    <div
      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
    >

      <div
        className={`max-w-sm px-5 py-3 rounded-2xl

        ${isBot
          ? "bg-blue-600 text-white"
          : "bg-gray-800 text-gray-100"
        }`}
      >

        {chat.message}

      </div>

    </div>

  );

}