"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreUser = void 0;
const structure_base_1 = __importDefault(require("../models/structure-base"));
const StoreUser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const newUserData = new structure_base_1.default({
        name,
        email,
        subject,
        message,
    });
    newUserData
        .save()
        .then(() => res.json('Data Sent'))
        .catch((err) => res.status(400).json('Reg Error' + err));
};
exports.StoreUser = StoreUser;
