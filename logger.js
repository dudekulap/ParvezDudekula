const fs = require('fs');
const { stringify } = require('flatted');

let logFilename = ''
let shouldLogToFile = false; // Flag to control logging to file

// Store reference to original console functions
const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

function createLogFile() {
    try {
        let d = new Date();
        logFilename = `consoleLogs${d.toJSON().replaceAll(":","_")}.log`
        fs.open(logFilename, 'w', (err) => {
            if (err) throw err;
        });
        console.log(`Console statements log file was created with name ${logFilename}`)
    } catch (err) {
        console.log(`Log file was not created due error\n${err}`)
    }
}

// Function to log messages to both console and a .log file
function logToFile(message) {
    try {
        if (shouldLogToFile) {
            fs.appendFile(logFilename, message + '\n', (err) => {
                if (err) throw err;
            });
        }
    } catch (err) {
        console.log(`Error while logging console statments into ${logFilename}\n${err}`)
    }
}

// Override console.log to log to both console and file
console.log = (...args) => {
    originalConsoleLog(...args);
    // logToFile(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '));
    logToFile(args.map(arg => {
        if (typeof arg === 'object') {
            try {
                return stringify(arg);
            } catch (err) {
                return `[Circular] ${err}`;
            }
        }
        return arg;
    }).join(' '));
};

// Override console.error to also log to both console and file
console.error = (...args) => {
    originalConsoleError(...args);
    // logToFile(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '));
    logToFile(args.map(arg => {
        if (typeof arg === 'object') {
            try {
                return stringify(arg);
            } catch (err) {
                return `[Circular] ${err}`;
            }
        }
        return arg;
    }).join(' '));
};

// Override console.warn to also log to both console and file
console.warn = (...args) => {
    originalConsoleWarn(...args);
    // logToFile(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '));
    logToFile(args.map(arg => {
        if (typeof arg === 'object') {
            try {
                return stringify(arg);
            } catch (err) {
                return `[Circular] ${err}`;
            }
        }
        return arg;
    }).join(' '));
};

function startLoggingToFile() {
    shouldLogToFile = true;
}

function stopLoggingToFile() {
    shouldLogToFile = false;
}

function getLogFilename() {
    return logFilename;
}

function changeLogFilename(newLogFileName) {
    logFilename = newLogFileName;
    console.log("Changed log file name to ", logFilename)
}

module.exports = { createLogFile, startLoggingToFile, stopLoggingToFile, getLogFilename, changeLogFilename }