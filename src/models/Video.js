import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLengh: 5,
    maxLength: 80,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minLengh: 5,
    maxLength: 140,
  },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", (hashtags) => {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word.trim() : `#${word.trim()}`));
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
