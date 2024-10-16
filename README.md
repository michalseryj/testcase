# Cypress Testing Suite

## Table of Contents
- [Overview](#overview)
- [Setup Instructions](#setup-instructions)
- [Test Execution](#test-execution)
- [Debugging Tips](#debugging-tips)
- [Structure and Design](#structure-and-design)

## Overview
This repository contains end-to-end (E2E) tests for datart web application using Cypress.

## Setup Instructions
To get started with the Cypress testing suite, follow these steps:
clone the repository using:
https://github.com/michalseryj/dnanhomework.git

npm install                # Install Node.js dependencies
npx cypress open           # Open Cypress Test Runner (optional)

## Test execution
To run tests, follow these commands:
npx cypress run            # Run all Cypress tests
npx cypress run --spec 'cypress/e2e/example.cy.js'  # Run specific test

## Debugging Tips
Screenshots of failed tests are stored in 'cypress/screenshots'

## Structure and design
This E2E repository is implemented using page object model, 
pages are located in 'cypress/pages',
tests are located in 'cypress/e2e'

