const express = require("express");
const mongoose = require("mongoose");
const logger = require ("morgan");
const compression =require ("compression");

const PORT = process.env.PORT || 3000;
const app = express();



