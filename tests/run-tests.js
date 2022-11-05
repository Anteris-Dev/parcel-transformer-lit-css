const fs = require('fs');
const assert = require("assert");
const { expect } = require('chai');

const unoptimized = fs.readFileSync('./dist/style.js', { encoding: 'utf8' });
const optimized = fs.readFileSync('./dist-optimized/style.js', { encoding: 'utf8' });

it('should generate optimized css', () => {
    expect(optimized).to.include('\`.button{color:red}\`');
});

it('should generate unoptimized css', () => {
   expect(unoptimized).to.include(`\`.button {
    color: red;
}\``);
});