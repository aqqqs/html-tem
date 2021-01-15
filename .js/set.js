//ECMAscript2015
//cmd -> in folder node set

//const set = new Set (['ciguena', 'grulla', 'cisna'])
//const set = new Set ( ['ciguena'] )
//const set = new Set ('ciguena')

//const set1 = new Set ( ['ciguena'] )
//const set2 = new Set (set1)

//const set = new Set (42) undefined

const set = new Set ()
//const ciguenaRef = {className: 'ciguena'}

set.add ('ciguena')
	.add ('grulla')
	.add ('cisna')
	//.delete ('grulla')
	//.clear ()

//set.add ( {className: 'ciguena'} )
//set.add (ciguenaRef)

//console.log (set)
//console.log (set1, set2)
//console.log (set.size)
//console.log (set.has('ciguena'))
//console.log (set.has('oso')
//console.log (set.has ( {className: 'ciguena'} ))
//console.log (set.has ( ciguenaRef ))
//console.log (set.values())
//console.log (...set)
//console.log (...set.values())
//console.log (...set.keys())
//console.log (...set.entries())
//console.log ({...set])
//console.log (Array.from(set))

/*for ( item of set) {
	console.log (item)
}*/

//set.forEach (item => console.log (item))
set.forEach ((item, item2, set) => console.log (item, item2, set))