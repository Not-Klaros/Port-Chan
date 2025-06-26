import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('Missing MONGODB_URI environment variable');
  process.exit(1);
}

mongoose.connect(mongoUri).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error', err);
  process.exit(1);
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
}, { timestamps: true });

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },
  company: { type: String, required: true },
  dates: { type: String, required: true },
  description: { type: String, required: true },
});

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  school: { type: String, required: true },
  dates: { type: String, required: true },
});

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Post = mongoose.model('Post', postSchema);
const Project = mongoose.model('Project', projectSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Education = mongoose.model('Education', educationSchema);
const Skill = mongoose.model('Skill', skillSchema);

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().lean();
  res.json(posts);
});

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find().lean();
  res.json(projects);
});

app.get('/api/resume', async (req, res) => {
  const experiences = await Experience.find().lean();
  const education = await Education.find().lean();
  const skills = await Skill.find().lean();
  res.json({ skills, experiences, education });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
