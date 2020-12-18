class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.date :due_date
      t.integer :owner_id
      t.integer :team_id

      t.timestamps
    end
  
    add_index :projects, :name
    add_index :projects, :owner_id
    add_index :projects, :team_id
  end
end
