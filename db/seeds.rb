# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'faker'

User.destroy_all
Dispensary.destroy_all

user1 = User.create(username: "mara", email: "mara@mara.com", password: 'maramara')
user2 = User.create(username: "mike", email: "mike@mike.com", password: 'mikemike')
user3 = User.create(username: "veronika", email: "submissive@breedable.com", password: 'exactlyright')

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

productA1 = Product.create(dispensary_id: 1, name: "Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz", url: 'images/products/icc.png')
productA2 = Product.create(dispensary_id: 1, name: "Sour Watermelon Fruit Chews", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package", url: 'images/products/smokiez.png')
productA3 = Product.create(dispensary_id: 1, name: "The Remedy", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle", url: 'images/products/theremedy.png')
productA4 = Product.create(dispensary_id: 1, name: "Full Mind - Strawberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g", url: 'images/products/Nuvata.png')
productA5 = Product.create(dispensary_id: 1, name: "Original Glue #4", brand: "Select Elite", price: 30.00, category: "Cartridge", size: "per 1/2 g", url: 'images/products/SelectElite.png')
productA6 = Product.create(dispensary_id: 1, name: "Releaf™ Balm 3:1 CBD:THC 600mg", brand: "Papa & Barkley", price: 90.00, category: "Balms & Salves", size: "15mL", url: 'images/products/Releaf™.png')

productB1 = Product.create(dispensary_id: 2, name: "Gelonade", brand: "Connected Cannabis Co.", price: 18.00, category: "Pre-Roll", size: "1g", url: 'images/products/gelonade.png')
productB2 = Product.create(dispensary_id: 2, name: "Animas Valley", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g", url: 'images/products/AnimasValleyLiveResin.png')
productB3 = Product.create(dispensary_id: 2, name: "Pink Lemonade", brand: "Kanha", price: 14.00, category: "Gummies", size: "10 pieces x 10mg/gummy", url: 'images/products/kanha.png')
productB4 = Product.create(dispensary_id: 2, name: "Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g", url: 'images/products/KingsGardenBananaOG.png')
productB5 = Product.create(dispensary_id: 2, name: "Dark Heart Nursery", brand: "Knights Templar", price: 16.00, category: "Clone", size: "each", url: 'images/products/KnightsTemplar.png')
productB6 = Product.create(dispensary_id: 2, name: "Calm 101", brand: "Canndescent", price: 60.00, category: "Flower", size: "per 1/8 oz", url: 'images/products/Canndescent.png')

productC1 = Product.create(dispensary_id: 3, name: "Sour Watermelon Fruit Chews", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package", url: 'images/products/smokiez.png')
productC2 = Product.create(dispensary_id: 3, name: "The Remedy", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle", url: 'images/products/theremedy.png')
productC3 = Product.create(dispensary_id: 3, name: "Full Mind - Strawberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g", url: 'images/products/Nuvata.png')
productC4 = Product.create(dispensary_id: 3, name: "Original Glue #4", brand: "Select Elite", price: 30.00, category: "Cartridge", size: "per 1/2 g", url: 'images/products/SelectElite.png')
productC5 = Product.create(dispensary_id: 3, name: "Releaf™ Balm 3:1 CBD:THC 600mg", brand: "Papa & Barkley", price: 90.00, category: "Balms & Salves", size: "15mL", url: 'images/products/Releaf™.png')
productC6 = Product.create(dispensary_id: 3, name: "Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz", url: 'images/products/icc.png')

productD1 = Product.create(dispensary_id: 4, name: "Animas Valley", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g", url: 'images/products/AnimasValleyLiveResin.png')
productD2 = Product.create(dispensary_id: 4, name: "Pink Lemonade", brand: "Kanha", price: 14.00, category: "Gummies", size: "10 pieces x 10mg/gummy", url: 'images/products/kanha.png')
productD3 = Product.create(dispensary_id: 4, name: "Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g", url: 'images/products/KingsGardenBananaOG.png')
productD4 = Product.create(dispensary_id: 4, name: "Dark Heart Nursery", brand: "Knights Templar", price: 16.00, category: "Clone", size: "each", url: 'images/products/KnightsTemplar.png')
productD5 = Product.create(dispensary_id: 4, name: "Calm 101", brand: "Canndescent", price: 60.00, category: "Flower", size: "per 1/8 oz", url: 'images/products/Canndescent.png')
productD6 = Product.create(dispensary_id: 4, name: "Gelonade", brand: "Connected Cannabis Co.", price: 18.00, category: "Pre-Roll", size: "1g", url: 'images/products/gelonade.png')

productE1 = Product.create(dispensary_id: 5, name: "The Remedy", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle", url: 'images/products/theremedy.png')
productE2 = Product.create(dispensary_id: 5, name: "Full Mind - Strawberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g", url: 'images/products/Nuvata.png')
productE3 = Product.create(dispensary_id: 5, name: "Original Glue #4", brand: "Select Elite", price: 30.00, category: "Cartridge", size: "per 1/2 g", url: 'images/products/SelectElite.png')
productE4 = Product.create(dispensary_id: 5, name: "Releaf™ Balm 3:1 CBD:THC 600mg", brand: "Papa & Barkley", price: 90.00, category: "Balms & Salves", size: "15mL", url: 'images/products/Releaf™.png')
productE5 = Product.create(dispensary_id: 5, name: "Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz", url: 'images/products/icc.png')
productE6 = Product.create(dispensary_id: 5, name: "Sour Watermelon Fruit Chews", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package", url: 'images/products/smokiez.png')

productF1 = Product.create(dispensary_id: 6, name: "Pink Lemonade", brand: "Kanha", price: 14.00, category: "Gummies", size: "10 pieces x 10mg/gummy", url: 'images/products/kanha.png')
productF2 = Product.create(dispensary_id: 6, name: "Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g", url: 'images/products/KingsGardenBananaOG.png')
productF3 = Product.create(dispensary_id: 6, name: "Dark Heart Nursery", brand: "Knights Templar", price: 16.00, category: "Clone", size: "each", url: 'images/products/KnightsTemplar.png')
productF4 = Product.create(dispensary_id: 6, name: "Calm 101", brand: "Canndescent", price: 60.00, category: "Flower", size: "per 1/8 oz", url: 'images/products/Canndescent.png')
productF5 = Product.create(dispensary_id: 6, name: "Gelonade", brand: "Connected Cannabis Co.", price: 18.00, category: "Pre-Roll", size: "1g", url: 'images/products/gelonade.png')
productF6 = Product.create(dispensary_id: 6, name: "Animas Valley", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g", url: 'images/products/AnimasValleyLiveResin.png')

