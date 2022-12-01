const express = require('express');
const router = require('express').Router()

const {
    getUserInfo,
    updateUserInfo,
    createUser,
    deleteUser
} = require('../controllers/user-controller.js')

router.route('/')
    .get(getUserInfo)
    .post(createUser)

router.route('/:id')
    .put(updateUserInfo)
    .delete(deleteUser)

module.exports = router;