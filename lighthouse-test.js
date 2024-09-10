const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

async function runLighthouse(url) {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = {
        logLevel: 'info',
        output: 'html',
        onlyCategories: ['performance'],
        port: chrome.port,
    };

    const runnerResult = await lighthouse(url, options);

    // Save the report
    const reportHtml = runnerResult.report;
    fs.writeFileSync(path.join(__dirname, 'lighthouse-report.html'), reportHtml);

    await chrome.kill();
}

runLighthouse('https://austinrgovender.github.io/eCommTestSite/')
    .then(() => console.log('Lighthouse test completed and report saved.'))
    .catch(err => console.error('Lighthouse test failed:', err));
