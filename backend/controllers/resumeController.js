import Resume from "../models/Resume.js";
import { analyzeResume } from "../services/resumeAnalyzer.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Analyze Resume
    const analysis = await analyzeResume(req.file.path);

    // Check if user already has a resume
    const existingResume = await Resume.findOne({
      user: req.user.id,
    });

    let resume;

    if (existingResume) {
      existingResume.fileName = req.file.filename;
      existingResume.filePath = req.file.path;
      existingResume.score = analysis.score;
      existingResume.foundSkills = analysis.foundSkills;
      existingResume.missingSkills = analysis.missingSkills;

      resume = await existingResume.save();
    } else {
      resume = await Resume.create({
        user: req.user.id,
        fileName: req.file.filename,
        filePath: req.file.path,
        score: analysis.score,
        foundSkills: analysis.foundSkills,
        missingSkills: analysis.missingSkills,
      });
    }

    res.status(201).json({
      success: true,
      message: "Resume Uploaded & Analyzed Successfully",
      resume,
    });

  } catch (error) {
    console.error("Resume Upload Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      user: req.user.id,
    });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    res.status(200).json({
      success: true,
      resume,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};