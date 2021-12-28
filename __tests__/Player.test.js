const Player = require('../app_server/models/playerModel')
const Character = require('../app_server/models/characterModel')
const Artifact = require('../app_server/models/artifactModel')
const Weapon = require('../app_server/models/weaponModel')
const mongoose = require("mongoose");

//Player
const RegisterPlayer = function (req, res) {
    new Player(req.body).save()
    res.json("Resgistered!")
}

const GetPlayer = function (req, res) {
    Character.findOne({username: req.params.username}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const UpdatePlayer = function (req, res) {
    Player.findOne({username: req.params.username}, req.body).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}


//Characters
const GetAllCharacters = function (req, res) {
    Character.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetCharacter = function (req, res) {
    Character.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Weapons
const GetAllWeapons = function (req, res) {
    Weapon.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetWeapon = function (req, res) {
    Weapon.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const DeleteWeapon = function (req, res) {
    Weapon.deleteOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

//Artifacts
const GetAllArtifacts = function (req, res) {
    Artifact.find({}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const GetArtifact = function (req, res) {
    Artifact.findOne({id: req.params.id}).exec((err, data) => {
        if (err) throw err
        res.json(data)
    })
}

test("Testing Getting Characters", done => {
    GetAllCharacters({}, {
        json: data => {
            console.log(data)
            expect(data).not.toBeNull();
            done();
        }
    })
})
