class CreateDispensaries < ActiveRecord::Migration[5.2]
  def change
    create_table :dispensaries do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :type, null: false

      t.timestamps
    end

    add_index :dispensaries, :name, unique: true
    add_index :dispensaries, :address, unique: true
  end
end
