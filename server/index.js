"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var axios_1 = __importDefault(require("axios"));
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(express_1["default"].static(path_1["default"].join(__dirname, "../public")));
app.get("/search/:title", function (req, res) {
    console.log("get111", req.url);
    axios_1["default"]
        .get("https://api.themoviedb.org/3/search/movie", {
        params: {
            api_key: process.env.MOVIES_API_KEY,
            page: 1,
            query: req.params.title
        }
    })
        .then(function (response) {
        var newMovies = response.data.results.map(function (movie, i) {
            return __assign(__assign({}, movie), { watched: false, trueIndex: i, display: false });
        });
        console.log(newMovies);
        res.status(200).send(newMovies);
    })["catch"](function (err) {
        console.log(err);
        res.status(500).end();
    });
});
app.listen(process.env.PORT);
