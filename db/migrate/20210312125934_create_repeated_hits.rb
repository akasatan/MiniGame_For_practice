class CreateRepeatedHits < ActiveRecord::Migration[5.0]
  def change
    create_table :repeated_hits do |t|
      t.integer :score
      t.references :game_name_id, foreign_key: true
      t.integer :user_id
      t.timestamps
    end
  end
end
