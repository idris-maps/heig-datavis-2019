import { path } from 'ramda'
import buildings from '../data/buildings.json'

export default (svg, projection) => {
    const getTransform = feature => {
        const point = projection(path(['geometry', 'coordinates'], feature))
        return `translate(${point[0]},${point[1]})`
    }
    svg.selectAll('text.buildings')
        .data(buildings.features)
        .enter()
        .append('text')
        .attr('class', 'building')
        .attr('transform', getTransform)
        .attr('fill', 'red')
        .text('$')
}
