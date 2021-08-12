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
user4 = User.create(username: "guest", email: "guest@email.com", password: 'password')

# east bay
dispensary1 = Dispensary.create(name: "Harborside Oakland", address: "1840 Embarcadero, Oakland, CA 94606", dispensary_type: 'Recreational & Medical', url: 'images/dispensaries/Harborside.png')
dispensary2 = Dispensary.create(name: "Cookies Oakland", address: "1776 Broadway, Oakland, CA 94612", dispensary_type: 'Medical', url: 'images/dispensaries/cookies.jpg')
dispensary3 = Dispensary.create(name: "MedMen - Emeryville", address: "3996 San Pablo Ave, Emeryville, CA 94608", dispensary_type: 'Recreational', url: 'images/dispensaries/medmen.jpg')
dispensary4 = Dispensary.create(name: "High Times Oakport", address: "7817 Oakport St, Oakland, CA 94621", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/hightimes.jpeg')
dispensary5 = Dispensary.create(name: "Blum - Oakland", address: "578 W Grand Ave, Oakland, CA 94612", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/blum.jpeg')
dispensary6 = Dispensary.create(name: "Embarc Alameda", address: "1616 Webster St, Alameda, CA 94501", dispensary_type: 'Recreational', url: 'images/dispensaries/embarc.jpg')
dispensary7 = Dispensary.create(name: "STIIIZY UNION SQUARE", address: "180 O'Farrell St, San Francisco, CA 94102", dispensary_type: 'Recreational & Medical', url: 'images/dispensaries/stiiizy.jpg')
dispensary8 = Dispensary.create(name: "Fig & Thistle Apothecary", address: "313 Ivy St, San Francisco, CA 94102", dispensary_type: 'Recreational', url: 'images/dispensaries/figthistle.jpeg')
dispensary9 = Dispensary.create(name: "Eureka Sky", address: "3989 17th St, San Francisco, CA 94114", dispensary_type: 'Recreational', url: 'images/dispensaries/eurekasky.jpg')
dispensary10 = Dispensary.create(name: "Authentic 415", address: "165 Mississippi St, San Francisco, CA 94107", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/authentic415.jpeg')
dispensary11 = Dispensary.create(name: "The Apothecarium - Marina", address: "2414 Lombard St, San Francisco, CA 94123", dispensary_type: 'Recreational', url: 'images/dispensaries/apothecarium.jpg')
dispensary12 = Dispensary.create(name: "CBCB", address: "Cannabis Buyers' Club of Berkeley, 3033 Shattuck Ave, Berkeley, CA 94705", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/cbcb.jpg')

# # northbay
# dispensary13 = Dispensary.create(name: "Harborside Oakland", address: "1840 Embarcadero, Oakland, CA 94606", dispensary_type: 'Recreational & Medical', url: 'images/dispensaries/Harborside.png')
# dispensary14 = Dispensary.create(name: "Cookies Oakland", address: "1776 Broadway, Oakland, CA 94612", dispensary_type: 'Medical', url: 'images/dispensaries/cookies.jpg')
# dispensary15 = Dispensary.create(name: "MedMen - Emeryville", address: "3996 San Pablo Ave, Emeryville, CA 94608", dispensary_type: 'Recreational', url: 'images/dispensaries/medmen.jpg')
# dispensary16 = Dispensary.create(name: "High Times Oakport", address: "7817 Oakport St, Oakland, CA 94621", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/hightimes.jpeg')
# dispensary17 = Dispensary.create(name: "Blum - Oakland", address: "578 W Grand Ave, Oakland, CA 94612", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/blum.jpeg')
# dispensary18 = Dispensary.create(name: "Embarc Alameda", address: "1616 Webster St, Alameda, CA 94501", dispensary_type: 'Recreational', url: 'images/dispensaries/embarc.jpg')

# # peninsula
# dispensary19 = Dispensary.create(name: "Harborside Oakland", address: "1840 Embarcadero, Oakland, CA 94606", dispensary_type: 'Recreational & Medical', url: 'images/dispensaries/Harborside.png')
# dispensary20 = Dispensary.create(name: "Cookies Oakland", address: "1776 Broadway, Oakland, CA 94612", dispensary_type: 'Medical', url: 'images/dispensaries/cookies.jpg')
# dispensary21 = Dispensary.create(name: "MedMen - Emeryville", address: "3996 San Pablo Ave, Emeryville, CA 94608", dispensary_type: 'Recreational', url: 'images/dispensaries/medmen.jpg')
# dispensary22 = Dispensary.create(name: "High Times Oakport", address: "7817 Oakport St, Oakland, CA 94621", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/hightimes.jpeg')
# dispensary23 = Dispensary.create(name: "Blum - Oakland", address: "578 W Grand Ave, Oakland, CA 94612", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/blum.jpeg')
# dispensary24 = Dispensary.create(name: "Embarc Alameda", address: "1616 Webster St, Alameda, CA 94501", dispensary_type: 'Recreational', url: 'images/dispensaries/embarc.jpg')

# # whatever
# dispensary25 = Dispensary.create(name: "Harborside Oakland", address: "1840 Embarcadero, Oakland, CA 94606", dispensary_type: 'Recreational & Medical', url: 'images/dispensaries/Harborside.png')
# dispensary26 = Dispensary.create(name: "Cookies Oakland", address: "1776 Broadway, Oakland, CA 94612", dispensary_type: 'Medical', url: 'images/dispensaries/cookies.jpg')
# dispensary27 = Dispensary.create(name: "MedMen - Emeryville", address: "3996 San Pablo Ave, Emeryville, CA 94608", dispensary_type: 'Recreational', url: 'images/dispensaries/medmen.jpg')
# dispensary28 = Dispensary.create(name: "High Times Oakport", address: "7817 Oakport St, Oakland, CA 94621", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/hightimes.jpeg')
# dispensary29 = Dispensary.create(name: "Blum - Oakland", address: "578 W Grand Ave, Oakland, CA 94612", dispensary_type: 'Medical & Recreational', url: 'images/dispensaries/blum.jpeg')
# dispensary30 = Dispensary.create(name: "Embarc Alameda", address: "1616 Webster St, Alameda, CA 94501", dispensary_type: 'Recreational', url: 'images/dispensaries/embarc.jpg')

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

productG1 = Product.create(dispensary_id: 7, name: "Full Mind - Strawberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g", url: 'images/products/Nuvata.png')
productG2 = Product.create(dispensary_id: 7, name: "Original Glue #4", brand: "Select Elite", price: 30.00, category: "Cartridge", size: "per 1/2 g", url: 'images/products/SelectElite.png')
productG3 = Product.create(dispensary_id: 7, name: "Releaf™ Balm 3:1 CBD:THC 600mg", brand: "Papa & Barkley", price: 90.00, category: "Balms & Salves", size: "15mL", url: 'images/products/Releaf™.png')
productG4 = Product.create(dispensary_id: 7, name: "Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz", url: 'images/products/icc.png')
productG5 = Product.create(dispensary_id: 7, name: "Sour Watermelon Fruit Chews", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package", url: 'images/products/smokiez.png')
productG6 = Product.create(dispensary_id: 7, name: "The Remedy", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle", url: 'images/products/theremedy.png')

productH1 = Product.create(dispensary_id: 8, name: "Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g", url: 'images/products/KingsGardenBananaOG.png')
productH2 = Product.create(dispensary_id: 8, name: "Dark Heart Nursery", brand: "Knights Templar", price: 16.00, category: "Clone", size: "each", url: 'images/products/KnightsTemplar.png')
productH3 = Product.create(dispensary_id: 8, name: "Calm 101", brand: "Canndescent", price: 60.00, category: "Flower", size: "per 1/8 oz", url: 'images/products/Canndescent.png')
productH4 = Product.create(dispensary_id: 8, name: "Gelonade", brand: "Connected Cannabis Co.", price: 18.00, category: "Pre-Roll", size: "1g", url: 'images/products/gelonade.png')
productH5 = Product.create(dispensary_id: 8, name: "Animas Valley", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g", url: 'images/products/AnimasValleyLiveResin.png')
productH6 = Product.create(dispensary_id: 8, name: "Pink Lemonade", brand: "Kanha", price: 14.00, category: "Gummies", size: "10 pieces x 10mg/gummy", url: 'images/products/kanha.png')

productI1 = Product.create(dispensary_id: 9, name: "Original Glue #4", brand: "Select Elite", price: 30.00, category: "Cartridge", size: "per 1/2 g", url: 'images/products/SelectElite.png')
productI2 = Product.create(dispensary_id: 9, name: "Releaf™ Balm 3:1 CBD:THC 600mg", brand: "Papa & Barkley", price: 90.00, category: "Balms & Salves", size: "15mL", url: 'images/products/Releaf™.png')
productI3 = Product.create(dispensary_id: 9, name: "Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz", url: 'images/products/icc.png')
productI4 = Product.create(dispensary_id: 9, name: "Sour Watermelon Fruit Chews", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package", url: 'images/products/smokiez.png')
productI5 = Product.create(dispensary_id: 9, name: "The Remedy", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle", url: 'images/products/theremedy.png')
productI6 = Product.create(dispensary_id: 9, name: "Full Mind - Strawberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g", url: 'images/products/Nuvata.png')

productJ1 = Product.create(dispensary_id: 10, name: "Dark Heart Nursery", brand: "Knights Templar", price: 16.00, category: "Clone", size: "each", url: 'images/products/KnightsTemplar.png')
productJ2 = Product.create(dispensary_id: 10, name: "Calm 101", brand: "Canndescent", price: 60.00, category: "Flower", size: "per 1/8 oz", url: 'images/products/Canndescent.png')
productJ3 = Product.create(dispensary_id: 10, name: "Gelonade", brand: "Connected Cannabis Co.", price: 18.00, category: "Pre-Roll", size: "1g", url: 'images/products/gelonade.png')
productJ4 = Product.create(dispensary_id: 10, name: "Animas Valley", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g", url: 'images/products/AnimasValleyLiveResin.png')
productJ5 = Product.create(dispensary_id: 10, name: "Pink Lemonade", brand: "Kanha", price: 14.00, category: "Gummies", size: "10 pieces x 10mg/gummy", url: 'images/products/kanha.png')
productJ6 = Product.create(dispensary_id: 10, name: "Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g", url: 'images/products/KingsGardenBananaOG.png')

productK1 = Product.create(dispensary_id: 11, name: "Releaf™ Balm 3:1 CBD:THC 600mg", brand: "Papa & Barkley", price: 90.00, category: "Balms & Salves", size: "15mL", url: 'images/products/Releaf™.png')
productK2 = Product.create(dispensary_id: 11, name: "Ice Cream Cake", brand: "Humboldt's Finest", price: 120.00, category: "Flower", size: "per 1/2 oz", url: 'images/products/icc.png')
productK3 = Product.create(dispensary_id: 11, name: "Sour Watermelon Fruit Chews", brand: "Smokiez Edibles", price: 16.00, category: "Edibles", size: "10 pieces per package", url: 'images/products/smokiez.png')
productK4 = Product.create(dispensary_id: 11, name: "The Remedy", brand: "Mary's Medicinals", price: 50.00, category: "Tincture", size: "60 servings in a 15mL bottle", url: 'images/products/theremedy.png')
productK5 = Product.create(dispensary_id: 11, name: "Full Mind - Strawberry", brand: "Nuvata", price: 40.00, category: "Disposable Vape Pen", size: "per 1/2 g", url: 'images/products/Nuvata.png')
productK6 = Product.create(dispensary_id: 11, name: "Original Glue #4", brand: "Select Elite", price: 30.00, category: "Cartridge", size: "per 1/2 g", url: 'images/products/SelectElite.png')

productL1 = Product.create(dispensary_id: 12, name: "Calm 101", brand: "Canndescent", price: 60.00, category: "Flower", size: "per 1/8 oz", url: 'images/products/Canndescent.png')
productL2 = Product.create(dispensary_id: 12, name: "Gelonade", brand: "Connected Cannabis Co.", price: 18.00, category: "Pre-Roll", size: "1g", url: 'images/products/gelonade.png')
productL3 = Product.create(dispensary_id: 12, name: "Animas Valley", brand: "Raw Garden", price: 35.00, category: "Live Resin", size: "per 1 g", url: 'images/products/AnimasValleyLiveResin.png')
productL4 = Product.create(dispensary_id: 12, name: "Pink Lemonade", brand: "Kanha", price: 14.00, category: "Gummies", size: "10 pieces x 10mg/gummy", url: 'images/products/kanha.png')
productL5 = Product.create(dispensary_id: 12, name: "Banana OG", brand: "Apothecary Genetics", price: 30.00, category: "Shatter", size: "per 1 g", url: 'images/products/KingsGardenBananaOG.png')
productL6 = Product.create(dispensary_id: 12, name: "Dark Heart Nursery", brand: "Knights Templar", price: 16.00, category: "Clone", size: "each", url: 'images/products/KnightsTemplar.png')
