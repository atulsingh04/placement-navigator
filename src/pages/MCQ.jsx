import { useEffect, useState } from "react";
import api from "../services/api";

export default function MCQ() {
  const [category, setCategory] = useState("Java");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuestions(category);
  }, [category]);

  const fetchQuestions = async (cat) => {
    try {
      setLoading(true);

      const res = await api.get(`/mcq/${cat}`);

      setQuestions(res.data.questions);

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        MCQ Practice
      </h1>

      <div className="flex gap-4 mb-8 flex-wrap">

        {["Java","DSA","DBMS","OS","Aptitude"].map((item)=>(
          <button
            key={item}
            onClick={()=>setCategory(item)}
            className={`px-6 py-3 rounded-xl ${
              category===item
                ? "bg-blue-600"
                : "bg-slate-700"
            }`}
          >
            {item}
          </button>
        ))}

      </div>

      {loading && (
        <h2>Loading...</h2>
      )}

      {!loading &&
        questions.map((q,index)=>(
          <div
            key={q._id}
            className="bg-slate-800 rounded-xl p-6 mb-6"
          >

            <h2 className="font-bold text-xl mb-4">

              {index+1}. {q.question}

            </h2>

            <div className="grid gap-3">

              {q.options.map((option)=>(
                <button
                  key={option}
                  className="bg-slate-700 hover:bg-blue-600 rounded-lg p-3 text-left"
                >
                  {option}
                </button>
              ))}

            </div>

          </div>
      ))}

    </div>
  );
}