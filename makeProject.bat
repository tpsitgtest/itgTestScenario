npm install -g protrator
npm install protractor --save-dev
webdriver-manager update
type nul > conf.cjs
mkdir features
cd features
type nul > test.feature
cd ..
mkdir specifications
cd specifications
type nul > spec.cjs
cd ..
mkdir reports
cd reports
mkdir json
cd..
cd ..
mkdir CucumberReportDirectory
mkdir protractor_reports
npm install cucumber
npm install --save-dev protractor-cucumber-framework
npm install --save cucumber-pretty
npm install cucumber-html-reporter --save-dev
npm install protractor-cucumber-steps --save-dev
npm install chai chai-as-promised
npm install protractor-beautiful-reporter --save-dev