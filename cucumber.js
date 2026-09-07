module.exports = {
  default: {
    paths: ['tests/features/*.feature'],
    require: ['tests/StepDefinations/**/*.ts'],
    requireModule: ['tsx/cjs'],
    format: [
      'progress',
      'html:reports/cucumber-report.html'
    ]
  }
};