const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id }).first();
}

function findSteps(stepID) {
    return db('steps')
    .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .where({ scheme_id: stepID });
}

function add(schema) {
    return db('schemes').insert(schema, 'id');
}

function addStep(step) {
    return db('steps').insert(step, 'id');
}

function update(changes,id) {
    return db('schemes')
    .update(changes)
    .where('id',id)
    .then(() => {
        return findById(id)
    })

}

function remove(id) {
    let scheme = '';

    findById(id).then(selectedScheme => {
        scheme = selectedScheme;
    })
    return db('schemes')
    .where('id',id)
    .del()

}