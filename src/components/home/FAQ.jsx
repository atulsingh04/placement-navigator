import faq from "../../data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="py-24">

      <h1 className="text-5xl font-bold text-center">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto mt-16 space-y-6">

        {faq.map((item) => (

          <div
            key={item.question}
            className="bg-gray-900 rounded-xl p-6"
          >

            <h2 className="text-xl font-semibold">
              {item.question}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.answer}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}