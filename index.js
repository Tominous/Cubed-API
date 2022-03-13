// UserAPI

const login = require('./processing/UserAPI/login.js');
const selectServer = require('./processing/UserAPI/selectServer.js');
const getServers = require('./processing/UserAPI/getServers.js');
const validate = require('./processing/UserAPI/validate.js');

const getFolder = require('./processing/UserAPI/files/getFolder.js');
const readFile = require('./processing/UserAPI/files/readFile.js');
const createFile = require('./processing/UserAPI/files/createFile.js');
const createFolder = require('./processing/UserAPI/files/createFolder.js');
const editFile = require('./processing/UserAPI/files/editFile');
const deleteFile = require('./processing/UserAPI/files/deleteFile');

const messageListener = require('./processing/UserAPI/console/messageListener.js');
const getConsole = require('./processing/UserAPI/console/getConsole.js');
const consoleSend = require('./processing/UserAPI/console/consoleSend.js');

// Public API

const servers = require('./processing/PSAPI/servers.js');
const server = require('./processing/PSAPI/server.js');
const topvoted = require('./processing/PSAPI/topvoted.js');
const topboosted = require('./processing/PSAPI/topboosted.js');
const bedwars = require('./processing/PSAPI/player/bedwars.js');
const warzone = require('./processing/PSAPI/player/warzone.js');
const tntwars = require('./processing/PSAPI/player/tntwars.js');
const info = require('./processing/PSAPI/player/info.js');

// Utils

const playerUUID = require('./processing/utils/playerUUID.js');
const orderServers = require('./processing/utils/orderServers.js');

module.exports = {
    login: login,
    selectServer: selectServer,
    getServers: getServers,
    validate: validate,
    getLogs: getLogs,
    FTPdetails: getFTP,
     databaseDetails: getDatabase,

    files: {
        create: createFile,
        createFolder: createFolder,
        downloadFile: downloadFile,
        downloadFolder: downloadFolder,
        edit: editFile,
        delete: deleteFile,
        read: readFile,
        getFolder: getFolder
    },

    console: {
        onMessage: messageListener,
        get: getConsole,
        send: consoleSend
    },

    plugins: {
        all: getAllPlugins,
        installed: getInstalledPlugins,
        uninstalled: getUninstalledPlugins,
        install: installPlugin,
        uninstall: uninstallPlugin
    },
    
    managers: {
        list: managerList,
        permissions: managerPermissions,
        add: managerAdd,
        edit: managerEdit,
        remove: managerRemove
    },

    properties: {
        get: getProperties,
        // NOTE TO SELF: add other functions to edit each different property
    },

    dashboard: {
        getSettings: getDashboardSettings
        // NOTE TO SELF: add other functions to edit each different dashboard setting
    },

    voteCommands: {
        getVoteCommands: getVoteCommands,
        addVoteCommand: addVoteCommand,
        removeVoteCommand: removeVoteCommand,
    },

    boostCommands: {
        getBoostCommands: getBoostCommands,
        addBoostCommand: addBoostCommand,
        removeBoostCommand: removeBoostCommand,
    },

    backups: {
        available: getAvailableBackups,
        load: loadBackup,
    },
    

    API: {
        servers: servers,
        server: server,
        topvoted: topvoted,
        topboosted: topboosted,
        player: {
            info: info,
            bedwars: bedwars,
            tntwars: tntwars,
            warzone: warzone
        }
    },

    utils: {
        playerUUID: playerUUID,
        orderServers: orderServers
    }
}
