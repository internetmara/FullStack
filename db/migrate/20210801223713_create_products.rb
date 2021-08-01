class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :dispensary_id, null: false, unique: true
      t.string :name, null: false
      t.string :brand, null: false
      t.float :price, null: false
      t.string :category, null: false 
      t.string :size, null: false
      
      t.timestamps
    end

    add_index :products, :name
    add_index :products, :brand
  end
end
