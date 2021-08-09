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

order1 = Order.create(user_id: 1, dispensary_id: 1, product_id: 1, purchase_num: 420, quantity: 1)
order2 = Order.create(user_id: 1, dispensary_id: 1, product_id: 1, purchase_num: 421, quantity: 1)
order3 = Order.create(user_id: 1, dispensary_id: 1, product_id: 1, purchase_num: 422, quantity: 1)
order4 = Order.create(user_id: 1, dispensary_id: 1, product_id: 1, purchase_num: 423, quantity: 1)

product1 = Product.create(dispensary_id: 1, name: "Half Ounce Jar Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz")
product1 = Product.create(dispensary_id: 1, name: "Sour Watermelon Fruit Chews - 100 mg THC - OK", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package")
product1 = Product.create(dispensary_id: 1, name: "The Remedy THC 1000mg (CA)", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle")
product1 = Product.create(dispensary_id: 1, name: "Body Dominant - Blueberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g")
product1 = Product.create(dispensary_id: 1, name: "Select Elite 1g Original Glue #4 - Hybrid", brand: "Select Oil", price: 30.00, category: "Cartridge", size: "per 1/2 g")
product1 = Product.create(dispensary_id: 2, name: "Pre-roll single - El Jefe", brand: "Connected Cannabis Co.", price: 16.00, category: "Pre Roll", size: "1g")
product1 = Product.create(dispensary_id: 2, name: "Animas Valley Live Resin", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g")
product1 = Product.create(dispensary_id: 2, name: "Full Melt Hash - Pink Lemonade - Hybrid", brand: "Harborside", price: 60.00, category: "Sauce", size: "per 1 g")
product1 = Product.create(dispensary_id: 2, name: "Kings Garden - Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g")
product1 = Product.create(dispensary_id: 3, name: "Dark Heart - Wedding Cake Heartlet", brand: "Harborside", price: 18.00, category: "Clone", size: "each")