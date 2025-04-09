import { Schema, model, models } from "mongoose";

const ResourceSchema = new Schema({
  type: {
    type: String,
    enum: ["video", "article", "course", "project"],
    required: true,
  },
  title: { type: String, required: true },
  link: { type: String, required: true },
});

const PhaseSchema = new Schema({
  phaseTitle: { type: String, required: true },
  description: { type: String },
  durationWeeks: { type: Number, required: true },
  topics: [{ type: String, required: true }],
  resources: [ResourceSchema],
  isCompleted: { type: Boolean, default: false },
  completedAt: { type: Date, default: null },
});

const RoadmapSchema = new Schema({
  roadmapTitle: { type: String, required: true },
  totalDurationWeeks: { type: Number, required: true },
  phases: [PhaseSchema],
  isRoadmapCompleted: { type: Boolean, default: false },
  startedAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: null },
});

export default models?.Roadmap || model("Roadmap", RoadmapSchema);
