const outputFileName = 'customer-data.json'
const csv=require('csvtojson')
const fs = require ('fs')
const path = require ('path')

const convertCSVtoJSON = (filename = './customer-data.csv')=>{

	const getJson = (inputFile, callback)=>{
		csv()
			.fromFile(inputFile)
			.on('end_parsed',(jsonArrObj)=>{
				callback(null, jsonArrObj)
			})
			.on('error', (error)=>{
				console.log('There was an error: '+error)
				callback(error)
			})
	}

	getJson (filename,(error,data)=>{
		if (error) return console.error(error)
		fs.writeFileSync(path.join(__dirname,'' ,outputFileName),JSON.stringify(data))
		console.log('Convertion ended succesfully. Check for the file '+outputFileName)
	})

}

convertCSVtoJSON()