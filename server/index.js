import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

const app = express();
app.use(express.json());
app.use(cors());

async function startServer() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error', err);
    process.exit(1);
  }
}

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
  type: {
    type: String,
    enum: ['technical', 'soft'],
    required: true,
  },
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

app.get('/api/skills/:type', async (req, res) => {
  const { type } = req.params;
  if (type !== 'technical' && type !== 'soft') {
    return res.status(404).send('Not found');
  }
  const skills = await Skill.find({ type }).lean();
  res.json(skills);
});

app.get('/api/resume', async (req, res) => {
  const experiences = await Experience.find().lean();
  const education = await Education.find().lean();
  res.json({ experiences, education });
});

startServer();
