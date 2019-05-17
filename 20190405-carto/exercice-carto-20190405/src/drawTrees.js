import { path } from 'ramda'
import trees from '../data/trees.json'

export default (svg, projection) => {
    const getTransform = feature => {
        const point = projection(path(['geometry', 'coordinates'], feature))
        return `translate(${point[0]},${point[1]})`
    }
    svg.selectAll('text.trees')
        .data(trees.features)
        .enter()
        .append('text')
        .attr('class', 'atm')
        .attr('transform', getTransform)
        .attr('fill', 'blue')
        .text('$')
}