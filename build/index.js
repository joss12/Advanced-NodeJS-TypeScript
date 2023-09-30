"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
server_1.app.listen(3060, () => {
    console.log('server started...');
});
