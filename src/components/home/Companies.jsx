import companies from "../../data/companies";

export default function Companies() {

  return (

    <section className="py-24">

      <h1 className="text-center text-5xl font-bold">

        Trusted By

      </h1>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 gap-8">

        {companies.map((company) => (

          <div
            key={company}
            className="bg-gray-900 rounded-xl p-8 text-center text-xl hover:bg-blue-600 duration-300"
          >

            {company}

          </div>

        ))}

      </div>

    </section>

  );

}