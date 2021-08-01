class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false, unique: true
      t.integer :dispensary_id, null: false, unique: true
      t.integer :product_id, null: false, unique: true
      t.string :purchase_num, null: false, unique: true
      t.integer :quantity, null: false 

      t.timestamps
    end
  end
end
