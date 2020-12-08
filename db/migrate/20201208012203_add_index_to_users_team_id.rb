class AddIndexToUsersTeamId < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :team_id
  end
end
