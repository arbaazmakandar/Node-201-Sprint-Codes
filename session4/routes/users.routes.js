
// const express = require('express');
const router = require('express').Router();
const {getUsersBySearch, getUsersByUUID, getAllUsers} = require('../controllers/users.controllers')
const queryValidator = require('../middlewares/validator')
const authorize = require('../middlewares/authorize');
const userSearchSchema = require('../validations/searchuser.js');



router.get('/',getAllUsers);
router.get('/search',authorize,queryValidator(userSearchSchema), getUsersBySearch);
router.get('/:uuid',getUsersByUUID);

module.exports = router;