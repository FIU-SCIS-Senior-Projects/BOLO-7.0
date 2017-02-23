/**
 * This class sets the controls for the account routes
 */

var User = require("../models/user.js");
var Agency = require("../models/agency.js");

/**
 * Responds with a the account home page.
 */
exports.getAccountDetails = function (req, res, next) {
    User.findUserByID(req.user._id, function (err, user) {
        if (err) next(err);
        else {
            res.render('account', {user: user});
        }
    })
};


exports.getUserNotifications = function (req, res, next) {
    var listOfAgencies = req.user.agencySubscriber;
    Agency.findAgenciesByID( listOfAgencies ,function (err, agencies) {
        if (err) 
            next(err);
        else {
            res.render('account-notifications', {agencies: agencies});
        }
    })
};

exports.getAvailableAgencyNotifications = function (req, res, next) {
    var listOfAgencies = req.user.agencySubscriber;
    Agency.findUnsubscribedAgenciesByID( listOfAgencies ,function (err, agencies) {
        if (err) 
            next(err);
        else {
            res.render('account-notifications-add', {agencies: agencies});
        }
    })
};

/**
 * Process form data to unsubscribe the user to the requested agency
 * notifications
 */
exports.postUnsubscribeNotifications = function ( req, res, next ) {
    if (typeof req.body.agencies === 'undefined') 
        res.redirect('/account/notifications');
    else{
        User.unsubscribeFromAgencies(req.user._id, req.body.agencies, function (err, user){
            if (err) 
                next(err)
            else {
                res.redirect('/account/notifications');
            }    
        }); 
    }
};


/**
 * Process form data to subscribe the user to the requested agency
 * notifications
 */
exports.postSubscribeNotifications = function ( req, res, next ) {
    console.log(req.user._id);
    console.log(req.body.agencies);
    Agency.findAgenciesByID(req.body.agencies , function (err, agencies) {
        if (err) 
            next(err);
        else {
            User.subscribeToAgencies(req.user._id, agencies, function (err, user){
                if (err) 
                    next(err)
                else {
                    res.redirect('/account/notifications/subscribe');
                }    
            });   
        }
    });
};


