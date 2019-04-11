import { path } from 'ramda'
import roads from '../data/roads.json'

export default (svg, pathCreator) => {

    const smallRoadTypes = ['footway', 'path']
    const bigRoadTypes = ['primary']

    const getRoadWidth = feature => {
        const type = path(['properties', 'highway'], feature)
        if (smallRoadTypes.includes(type)) {
            return 1
        }
        if (bigRoadTypes.includes(type)) {
            return 5
        }
        return 3
    }

    svg.selectAll('path.road')
        .data(roads.features)
        .enter()
        .append('path')
        .attr('class', 'road')
        .attr('d', pathCreator)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('stroke-width', getRoadWidth)
        .attr('stroke-linecap', 'round')
}