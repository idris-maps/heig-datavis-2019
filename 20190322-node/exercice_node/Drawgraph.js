const fetch = require('node-fetch');
const d3 = require('d3');
const R = require('ramda');
const fs = require('fs');

const DATA = require('./calculCountry.json');

DATA.sort((a, b) => a.sum > b.sum ? -1 : 1);

/*
const DATA = [
    { nom: 'Paul', note: 34 },
    { nom: 'Pauline', note: 98 },
    { nom: 'Pierre', note: 74 },
    { nom: 'Pierrette', note: 52 },
];*/

var svgWidth = 500;
var svgHeight = 400;
var svg = d3.select('#graph')
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "bar-chart");

var barPadding = 5;
var barWidth = (svgWidth / DATA.length);
var barChart = svg.selectAll("rect")
    .data(DATA)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d.note - 50
    })
    .attr("height", function(d) {
        return d.note;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });

svg.selectAll('text')
    .data(DATA)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * barWidth + barWidth / 2)
    .attr('y', svgHeight-20)
    .attr('text-anchor', 'middle')
    .text(d => d.country)




console.log(file);


