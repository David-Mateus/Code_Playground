const Football = require('../models/Football')

async function getFootball(request, response){
    const football = await Football.find()
    return response.json(football);
}
async function createFootball(request, response){
    const football = request.body;
    const newFootball = await Football.create(football)
    return response.status(201).json(newFootball)
}
async function updateFootball(request, response){
    const id =  request.params.id
    await Football.findByIdAndUpdate({_id: id}, request.body)
    .then(result =>{
        response.json('Success')
    })
    .catch(error => console.error(error))
    
}
async function deleteFootball(request, response){
    const id = request.params.id
    await Football.findByIdAndDelete({_id: id});
    return response.status(200).json({response:"Football deleted"})
}
module.exports = {
    getFootball,
    createFootball,
    updateFootball,
    deleteFootball
}