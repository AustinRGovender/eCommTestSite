# Performance Testing and Lighthouse Setup

## Overview

This document covers the setup and execution of Lighthouse tests and provides additional details on countdown timer customization for web pages.

## Lighthouse Test Setup and Execution

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Lighthouse**: Install Lighthouse globally via npm if you haven’t already:

    ```bash
    npm install -g lighthouse
    ```

### Running Lighthouse Tests

#### Basic Command

To run a this Lighthouse test, use:

```bash
lighthouse https://austinrgovender.github.io/eCommTestSite/ --output html --output-path ./lighthouse-report.html --chrome-flags="--headless" 

OR

node lighthouse-test.js
```

Explanation:

https://austinrgovender.github.io/eCommTestSite/: The URL of the site you want to test.
--output html: Specifies that the output should be in HTML format.
--output-path ./lighthouse-report.html: Path where the report will be saved.
--chrome-flags="--headless": Runs Chrome in headless mode (no UI).