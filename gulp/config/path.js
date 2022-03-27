import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())
const buildFolder = `./dist`
const sourceFolder = `./source`

export const path = {
 build: {
  html: `${buildFolder}/`,
  css: `${buildFolder}/styles/`,
  code: `${buildFolder}/code/`,
  files: `${buildFolder}/files/`,
  images: `${buildFolder}/images/`,
  fonts: `${buildFolder}/fonts/`,
 },
 source: {
  html: `${sourceFolder}/*.pug`,
  css: `${sourceFolder}/styles/style.scss`,
  code: `${sourceFolder}/code/app.js`,
  files: `${sourceFolder}/files/**/*.*`,
  images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
  svg: `${sourceFolder}/images/**/*.svg`,
 },
 watch: {
  html: `${sourceFolder}/**/*.pug`,
  css: `${sourceFolder}/styles/**/*.scss`,
  code: `${sourceFolder}/code/**/*.js`,
  files: `${sourceFolder}/files/**/*.*`,
  images: `${sourceFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
 },
 clean: buildFolder,
 buildFolder: buildFolder,
 sourceFolder: sourceFolder,
 rootFolder: rootFolder,
}
