// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 5000;
require('dotenv').config();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, company, projectType, budget, timeline, description } = req.body;
  
  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
    });

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.EMAIL_USER || 'your-email@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        <p><strong>Project Description:</strong></p>
        <p>${description}</p>
      `,
      text: `
        New Project Inquiry
        
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not specified'}
        Project Type: ${projectType}
        Budget Range: ${budget || 'Not specified'}
        Timeline: ${timeline || 'Not specified'}
        Project Description: ${description}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.' 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Something went wrong. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});
