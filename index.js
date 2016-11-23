    "use strict";

    const DavisServer = require('dynatrace-davis');

    try {
        const davisServer = new DavisServer(require('./config'));

        davisServer.run();
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
