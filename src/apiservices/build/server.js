"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
var port = process.env.PORT || 3000;
/*Using routes*/
//Connect your routes here
app.listen(port, function () {
    console.log("Api services is running on port ".concat(port));
});
