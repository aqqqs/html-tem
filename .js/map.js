//ECMAscript2015
//cmd -> in folder node map

const map = new Map (/*[
	[42, 54],
	['bullish', 'stock'],
	[true, false],
	[{}, 'liga'],
	[function conejo () {}, 'seis']
]*/)

//map.set (42, 'cuarenta y dos')
//map.set ('conejo', 'seite')
//map.delete (42)
//map.clear
map.set ('El Zorro', 'The Fox')
	.set ('El Lobo', 'The Wolf')
	.set ('El Oso', 'The Bear')
	.set ('El Conejo', 'The Rabbit')

//const map2 = new Map (map.entries ())
//const [ fisrt, second, third, fourth ] = map
//const [ [key, value] ] = map

//console.log (map)
//console.log (map.size)
//console.log (map.get)
//console.log (map.keys ())
//console.log (map.values ())
//console.log (...[map.entries ()])
//console.log (fisrt, second, third, fourth)
//console.log (key, value)

//for ( [key, value] of map) {
//	console.log (key, value)}

map.forEach ((value, key, map) => console.log (value, key, map))
