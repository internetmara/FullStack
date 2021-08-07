# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.destroy_all
Dispensary.destroy_all

user1 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user2 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user3 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user4 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user5 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user6 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user7 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user8 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')
user9 = User.create(username: Faker::Name.name, email: Faker::Internet.email, password: 'password')

dispensary1 = Dispensary.create(name: "Harborside Oakland", address: "1840 Embarcadero, Oakland, CA 94606", dispensary_type: 'Recreational & Medical', url: 'images/dispensaries/Harborside.png')
dispensary2 = Dispensary.create(name: "Cookies Oakland", address: "1776 Broadway, Oakland, CA 94612", dispensary_type: 'Medical', url: 'images/dispensaries/cookies.jpg')
dispensary3 = Dispensary.create(name: "MedMen - Emeryville", address: "3996 San Pablo Ave, Emeryville, CA 94608", dispensary_type: 'Recreational', url: 'images/dispensaries/medmen.jpg')
dispensary4 = Dispensary.create(name: "High Times Oakport", address: "7817 Oakport St, Oakland, CA 94621", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/hightimes.jpeg')
dispensary5 = Dispensary.create(name: "Blum - Oakland", address: "578 W Grand Ave, Oakland, CA 94612", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/blum.jpeg')
dispensary6 = Dispensary.create(name: "Embarc Alameda", address: "1616 Webster St, Alameda, CA 94501", dispensary_type: 'Recreational', url: 'images/dispensaries/embarc.jpg')

