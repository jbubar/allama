class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name
      t.integer :project_id

      t.timestamps
    end
    add_index :sections, [:name, :project_id], unique: true
  end
end
