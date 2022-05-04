# smart-hardware-workspace

## Introduction

Module Federation allows for the integration of separately complied programs known as micro-frontends. The feature is part of webpack since version 5.0. 

This Angular project implements module federation with the help of the Angular Architect's package: https://www.npmjs.com/package/@angular-architects/module-federation

### Instructions
This project relies on a backend server: https://github.com/recruit-case/Frontend-Starter

Run `npm install` to install project dependencies.

Run `ng build product-lib` to build the shared library project.

Run `npm run run:all` to run the microfronteneds in parallel.

Navigate to http://localhost:8000/recommended
