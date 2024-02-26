const fs = require('fs');
let apps = { nextid: 0 };

if (fs.existsSync('chrips.json')) {
    apps = JSON.parse(fs.readFileSync('apps.json'));
}

let writeApps = () => {
    fs.writeFileSync('apps.json', JSON.stringify(apps));
};

let getApps = () => {
    return Object.assign({}, apps);
}
let getApp = () => {
    return Object.assign({}, apps[id]);
}

let createApp = (app) => {
    apps[apps.nextid++] = app;
    writeApps();
}

let updateApp = (id, app) => {
    apps[id] = app;
    writeApps();
}

let deleteApp = id => {
    delete apps[id];
    writeApps();
}

module.exports = {
    Apps: apps,
    CreateApp: createApp,
    DeleteApp: deleteApp,
    GetApps: getApps,
    GetApp: getApp,
    updateApp: updateApp
}