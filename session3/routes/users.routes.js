
// const express = require('express');
const router = require('express').Router();
const {getUsersBySearch, getUsersByUUID, getAllUsers} = require('../../session4/controllers/users.controllers')



router.get('/',getAllUsers);
router.get('/search', getUsersBySearch);
router.get('/:uuid',getUsersByUUID);

module.exports = router;