"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const router = (0, express_1.Router)();
router.post('/kingpress/data/message/senddata', controller_1.StoreUser);
exports.default = router;
