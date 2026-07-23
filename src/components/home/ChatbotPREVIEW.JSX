import chatDemo from "../../data/chatDemo";
import ChatBubble from "./ChatBubble";

export default function ChatbotPreview() {

  return (

    <section className="py-24 bg-[#030712]">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-white">

          AI Career Assistant

        </h1>

        <p className="text-center text-gray-400 mt-4">

          Ask anything about placements.

        </p>

        <div className="bg-white/5 mt-16 rounded-3xl border border-white/10 p-8">

          <div className="space-y-6">

            {chatDemo.map((chat, index) => (

              <ChatBubble
                key={index}
                chat={chat}
              />

            ))}

          </div>

          <div className="flex mt-10 gap-4">

            <input

              type="text"

              placeholder="Ask AI..."

              className="flex-1 bg-gray-900 rounded-xl px-5 py-4 outline-none"

            />

            <button
              className="bg-blue-600 px-8 rounded-xl"
            >
              Send
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}