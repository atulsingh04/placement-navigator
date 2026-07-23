import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../services/resumeService";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size should be less than 5MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF Resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const data = await uploadResume(formData);

      setUploadSuccess(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (error) {
      alert(error.response?.data?.message || "Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-slate-100 to-blue-200 flex items-center justify-center px-5">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-xl">

        <h1 className="text-4xl font-bold text-center text-blue-600">
          Resume Upload
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Upload your latest resume (PDF only)
        </p>

        <div className="mt-8 border-2 border-dashed border-blue-400 rounded-2xl bg-blue-50 p-8 text-center">

          <label
            htmlFor="resume"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl inline-block"
          >
            Choose Resume
          </label>

          <input
            id="resume"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="mt-5">

            {file ? (
              <>
                <h3 className="font-semibold text-green-600">
                  Selected File
                </h3>

                <p className="mt-2">{file.name}</p>

                <p className="text-sm text-gray-500 mt-1">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </>
            ) : (
              <p className="text-gray-400">
                No Resume Selected
              </p>
            )}

          </div>

        </div>

        {uploadSuccess && (
          <div className="mt-5 bg-green-100 border border-green-400 rounded-xl p-4 text-center text-green-700 font-semibold">
            ✅ Resume Uploaded Successfully
          </div>
        )}

        <button
          disabled={loading}
          onClick={handleUpload}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-3 bg-gray-200 hover:bg-gray-300 py-4 rounded-xl"
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}