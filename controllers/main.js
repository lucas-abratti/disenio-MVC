const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router()
const path = require('path');

module.exports = {
    home: (req, res) => {
        res.render('home')
    },
    about: (req, res) => {
        res.render('about')
    },
    practica: (req, res) => {
        res.render('practica')
    }
}