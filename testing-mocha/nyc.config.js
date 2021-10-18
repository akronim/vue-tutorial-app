module.exports = {
  include: ['src/**/*.{js,vue}'],
  extension: ['.js', '.vue'],
  'check-coverage': true,
  branches: 80,
  lines: 80,
  functions: 80,
  statements: 80,
  'report-dir': './reports',
  'skip-full': false,
  reporter: ['lcov', 'text', 'text-summary']
}
