class ChangeTeacherIdToUserId < ActiveRecord::Migration
  def change
    rename_column :projects, :teacher_id, :user_id
  end
end
