const express = require('express');
const router = express.Router();

// Import the landing controller
let landing = require('../controllers/landing');
router.get('/', landing.get_landing);
router.post('/', landing.submit_lead);
router.get('/leads', landing.show_leads);
router.get('/lead/:lead_id', landing.show_lead);
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead); // route for editing a lead (added)

module.exports = router;
