const models = require('../models');

exports.get_landing = (req, res, next) =>
    res.render('landing', { title: 'Express from Solomon with Controllers' });

exports.submit_lead = (req, res, next) => {
    return models.Lead.create({
        email: req.body.lead_email,
        name: req.body.lead_name,
        id: req.body.lead_id
    }).then(lead => {
        res.redirect('/leads');
    })
}

exports.show_leads = (req, res, next) => {
    models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express from Solomon with Controllers', leads: leads });
    })
}

exports.show_lead = (req, res, next) => {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead: lead });
    });
}

exports.show_edit_lead = (req, res, next) => {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead: lead });
    }).catch(err => {
        console.log(err);
    });
}


exports.edit_lead = (req, res, next) => {
    return models.Lead.update({
        name: req.body.lead_name,
        email: req.body.lead_email
    }, {
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        console.log(result);
        res.redirect('/lead/' + req.params.lead_id);
    })
}
//all above is edited



/*const models = require('../models');

exports.get_landing = (req, res, next) =>
    res.render('landing', { title: 'Express from Solomon with Controllers' });

exports.submit_lead = (req, res, next) => {
    return models.Lead.create({
        email: req.body.lead_email,
        name: req.body.lead_name,
        id: req.body.lead_id
    }).then(lead => {
        res.redirect('/leads');
    })
}
exports.show_leads = (req, res, next) => {
    models.Lead.findAll().then(leads => {
        res.render('landing', { title: 'Express from Solomon with Controllers', leads: leads });//passing any object to the view
    })
}
exports.show_lead = (req, res, next) => {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead', { lead: lead });//passing any object to the view
    });
}
exports.show_edit_lead = (req, res, next) => {
    return models.Lead.findOne({
        where: {
            id: req.params.lead_id
        }
    }).then(lead => {
        res.render('lead/edit_lead', { lead: lead });//form to edit
    });
}
exports.edit_lead = (req, res, next) => {
    return models.Lead.update({
        id: parseInt(req.params.lead_id),//parseInt(req.body.lead_id),
        name: req.body.lead_name,
        email: req.body.lead_email//,
        // updatedAt: Date.now()
    }, {
        where: {
            id: req.params.lead_id
        }
    }).then(result => {
        console.log(result);
        res.redirect('/lead/' + parseInt(req.params.lead_id))
        // res.redirect('/') //from http://localhost:3000/lead/13/edit to http://localhost:3000/lead/13
    })
}
*/