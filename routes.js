// route handlers
const express = require('express');
const router = express.Router();

// Home
router.get("/", (req, res) => {
  res.render("index", { title: 'Home' });
});

// Mission and Teams
  // Mission
  router.get("/mission", (req, res) => {
    res.render("Mission", { title: 'Mission' });
  });
  // Team
  router.get("/team", (req, res) => {
    res.render("Team", { title: 'Team' });
  });
  // Diversity and Inclusion
  router.get("/divinc", (req, res) => {
    res.render("DiversityInclusion", { title: 'Diversity and Inclusion' });
  });
  // Contact
  router.get("/contact", (req, res) => {
    res.render("Contact", { title: 'Contact' });
  });
  // Job Opportunities
  router.get("/job", (req, res) => {
    res.render("JobOpportunities", { title: 'Job Opportunities' });
  });
  // Press Released Speaker Bureau
  router.get("/prsb", (req, res) => {
    res.render("PressReleasedSpeakerBureau", { title: 'Press Released Speaker Bureau' });
  });

// Services
  // Clinical Services
  router.get("/clinicalsrvs", (req, res) => {
    res.render("ClinicalSrvs", { title: 'Clinical Services' });
  });
  // Assessment
  router.get("/assessment", (req, res) => {
    res.render("Assessment", { title: 'Assessment' });
  });
  // Resources
  router.get("/resources", (req, res) => {
    res.render("Resources", { title: 'Resources' });
  });

// Education and Training
  // Trainees
  router.get("/trainees", (req, res) => {
    res.render("Trainees", { title: 'Trainees' });
  });
  // Health Care Professionals
  router.get("/professionals", (req, res) => {
    res.render("Professionals", { title: 'Health Care Professionals' });
  });

// Research
  // Trials
  router.get("/trials", (req, res) => {
    res.render("Trials", { title: 'Trials' });
  });
  // Publications
  router.get("/publications", (req, res) => {
    res.render("Publications", { title: 'Publications' });
  });
  // Presentations
  router.get("/presentations", (req, res) => {
    res.render("Presentations", { title: 'Presentations' });
  });

// export route
module.exports = router;