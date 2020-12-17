class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.integer :section_id
      t.integer :assignee_id
      t.date :due_date
      t.boolean :completed

      t.timestamps
    end
    add_index :tasks, :title
    add_index :tasks, :section_id
    add_index :tasks, :assignee_id
  end
end
