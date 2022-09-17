"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const base_1 = __importDefault(require("./config/base"));
const routes_1 = __importDefault(require("./api/routes"));
const dotenv_1 = __importDefault(require("dotenv"));
(0, base_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
app.use(express_1.default.static(__dirname + '/public'));
app.use(express_1.default.static(__dirname + '/views'));
app.set('view engine', 'pug');
/*Using routes*/
app.use('/transporter', routes_1.default);
app.get('/', (req, res) => {
    res.render(__dirname + `/views/index`);
});
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
