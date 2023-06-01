const state = {
	items: [
		{
			id: '001-Wolf-Mug',
			name: 'Wolf Mug',
			price: 17.11,
			description:
				'Un caffè mattutino, il tè delle cinque, una cioccolata calda davanti alla tv... questa tazza sarà sempre e comunque perfetta per ogni occasione! È resistente e lucida e la sua stampa è adatta al microonde e alla lavastoviglie',
			feature: [
				'In ceramica',
				'Dimensioni della tazza da 11 oz: altezza: 9,6 cm (3,79"), diametro: 8,3 cm (3,25")',
				'Dimensioni della tazza da 15 oz: altezza: 11,9 cm (4,69"), diametro 8,5 cm (3,35")',
				'Lavabile in lavastoviglie e adatta al microonde',
				'Prodotto neutro proveniente dalla cina',
			],
		},
		{
			id: '002-Wolf-Jacket',
			name: 'Wolf Jacket',
			price: 38.25,
			description:
				'Rimani al riparo dalle intemperie grazie a questa giacca Champion ripiegabile. Questa giacca in poliestere resistente alla pioggia e al vento arricchita da un prezioso ricamo ha un pratico cappuccio, un tascone frontale e una tasca con cerniera estraibile nella quale può essere riposta.',
			feature: [
				'100% micro popeline di poliestere',
				'Resistente al vento e alla pioggia',
				'Giacca con zip corta e cappuccio',
				'Tasca canguro anteriore',
				'Tasca astuccio con zip nascosta',
				'Riponibile nella tasca astuccio con zip',
				"Cordino elastico regolabile sul cappuccio e sull'orlo inferiore",
				'Polsini elasticizzati',
				'Logo a forma di "C" ricamato sulla manica sinistra',
			],
		},
		{
			id: '003-Wolf-Hat',
			name: 'Wolf Hat',
			price: 23.0,
			description:
				'Questo cappellino ha una vestibilità classica, una tesa piatta ed è interamente realizzato in tela rigida. Inoltre, il suo sistema di chiusura a scatto regolabile lo rende estremamente comodo da indossare.',
			feature: [
				'80% acrilico, 20% lana',
				'Il colore Camo verde è 60% cotone e 40% poliestere',
				'Strutturato, a 6 pannelli, con un profilo alto',
				'Chiusura a scatto in plastica',
				'Sottovisiera verde',
				'Circonferenza della testa: 54,9 cm - 60 cm (21⅝″ - 23⅝″)',
				'Prodotto neutro proveniente da Vietnam o Bangladesh',
			],
		},
		{
			id: '004-Wolf-Hoodie',
			name: 'Wolf Hoodie',
			price: 30.0,
			description:
				"Tutti hanno bisogno di un'avvolgente felpa con cappuccio infallibile per raggomitolarcisi dentro, per questo scegline una morbida, liscia e di gran stile. È la scelta perfetta per le serate più fredde!",
			feature: [
				'50% cotone prelavato e 50% poliestere',
				'Peso del tessuto: 271,25 g/m² (8,0 oz/yd²)',
				"Maglia filata a getto d'aria per un effetto morbidezza e meno pallini",
				'Cappuccio a doppio strato con coulisse abbinata',
				'Niente piega centrale per evitare le pieghe nel mezzo',
				'Polsini e fascia in vita sportivi a costine 1 x 1 con spandex',
				'Tasca interna frontale',
				'Impuntura doppia su colletto, spalle, giromanica, polsini e orlo',
				'Prodotto neutro proveniente da Bangladesh, Nicaragua, Honduras o El Salvador',
			],
		},
		{
			id: '005-Wolf-Man-T-Shirt',
			name: 'Wolf Man T-Shirt',
			price: 15.0,
			description:
				'Hai trovato la maglietta essenziale del tuo guardaroba. È realizzata in 100% cotone filato ad anello ed è morbida e comoda. La doppia cucitura sulla scollatura e sulle maniche donano una maggiore durata a quella che diventerà sicuramente la tua maglietta preferita!',
			feature: [],
		},
		{
			id: '006-Wolf-Woman-White-T-Shirt',
			name: 'Wolf Woman White T-Shirt',
			price: 15.0,
			description:
				'La tipica t-shirt in cotone al 100% (eccetto per le tinte mélange che contengono il 10% di poliestere). Il tessuto viene prelavato per garantire il mantenimento delle sue dimensioni anche dopo diversi lavaggi e la t-shirt ha una vestibilità classica.',
			feature: [],
		},
		{
			id: '007-Wolf-Woman-Black-t-Shirt',
			name: 'Wolf Hoodie',
			price: 15.0,
			description:
				'La tipica t-shirt in cotone al 100% (eccetto per le tinte mélange che contengono il 10% di poliestere). Il tessuto viene prelavato per garantire il mantenimento delle sue dimensioni anche dopo diversi lavaggi e la t-shirt ha una vestibilità classica.',
			feature: [],
		},
		{
			id: '008-Wolf-Zipped-Hoodie',
			name: 'Wolf Zipped Hoodie',
			price: 36.0,
			description:
				"Quando la temperatura scende nelle sere d'estate in riva a un lago o quando semplicemente vuoi indossare qualcosa di comodo, questa leggera felpa unisex dal taglio moderno con cappuccio, zip sul davanti e una tasca a marsupio è la soluzione che fa al caso tuo.",
			feature: [],
		},
		{
			id: '009-Wolf-White-Jersey',
			name: 'Wolf Jersey',
			price: 20.5,
			description:
				'Un classico senza tempo pensato per chiunque sia alla ricerca di eccellente qualità e morbidezza.',
			feature: [],
		},
		{
			id: '010-Wolf-Bottle',
			name: 'Wolf Hoodie',
			price: 28.0,
			description:
				'Questa borraccia in acciaio inox da mezzo litro e con struttura a doppia parete sarà perfetta per le tue uscite quotidiane, mantenendo la tua bevanda preferita alla temperatura ideale per ore! Avendo un tappo inodore ed ermetico, potrai lanciarla in macchina mentre vai al lavoro, portarla con te durante le escursioni, oppure metterla in borsa e lasciarla muovere liberamente.',
			feature: [],
		},
	],
	cart: [],
}

export { state }
