class CreateProjectsTable < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :teacher_id
      t.string  :name
      t.string  :access_code
    end
  end
end
