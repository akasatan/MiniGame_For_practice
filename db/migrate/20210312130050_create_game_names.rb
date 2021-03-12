class CreateGameNames < ActiveRecord::Migration[5.0]
  def change
    create_table :game_names do |t|
      t.string :name
      t.boolean :is_vaild

      t.timestamps
    end
  end
end
