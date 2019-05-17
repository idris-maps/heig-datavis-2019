import {
    select,
    geoMercator,
    geoPath,
} from 'd3'
import {
    WIDTH,
    HEIGHT,
} from './config'
import drawRoads from './drawRoads'
import drawAtm from './drawAtm'
import drawTrees from './drawTrees'
import drawBuildings from './drawBuildings'

const body = select(document.body)
const svg = body.append('svg')
.attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const projection = geoMercator()
.fitExtent(
    [[0, 0], [WIDTH, HEIGHT]],
    { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: [[6.64398, 46.77937], [6.64948, 46.78314]] } }
)
const pathCreator = geoPath().projection(projection)

drawRoads(svg, pathCreator)
drawAtm(svg, projection)
drawTrees(svg, projection)
drawBuildings(svg, projection)