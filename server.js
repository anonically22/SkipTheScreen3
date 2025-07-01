const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory session storage (temporary)
let userSession = {};

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic Page Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/templates', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'templates.html'));
});

app.get('/builder/:templateId', (req, res) => {
    const { templateId } = req.params;
    // For now, just send the builder page, templateId can be used by frontend JS
    res.sendFile(path.join(__dirname, 'public', 'builder.html'));
});

// API Endpoints (Placeholder)
app.get('/api/session', (req, res) => {
    res.json({ sessionId: 'mockSessionId', userData: userSession });
});

app.post('/api/resume', (req, res) => {
    // Simulate saving resume data to session
    const { resumeData } = req.body;
    if (resumeData) {
        userSession.resume = resumeData;
        console.log('Updated user session:', userSession);
        res.json({ message: 'Resume data saved to session successfully', data: userSession.resume });
    } else {
        res.status(400).json({ message: 'No resume data provided' });
    }
});

app.get('/api/resume', (req, res) => {
    // Simulate retrieving resume data from session
    if (userSession.resume) {
        res.json({ message: 'Resume data retrieved from session', data: userSession.resume });
    } else {
        res.status(404).json({ message: 'No resume data found in session' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
