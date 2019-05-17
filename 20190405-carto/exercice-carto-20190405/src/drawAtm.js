import { path } from 'ramda'
import atms from '../data/atm.json'

export default (svg, projection) => {
    const getTransform = feature => {
        const point = projection(path(['geometry', 'coordinates'], feature))
        return `translate(${point[0]},${point[1]})`
    }
    svg.selectAll('text.atm')
        .data(atms.features)
        .enter()
        .append('text')
        .attr('class', 'atm')
        .attr('transform', getTransform)
        .attr('fill', 'green')
        .text('$')
}