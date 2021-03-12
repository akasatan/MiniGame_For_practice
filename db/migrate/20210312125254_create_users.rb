class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.text :comment
      t.integer :total_score

      t.timestamps
    end
  end
end
