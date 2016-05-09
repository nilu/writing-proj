class Project < ActiveRecord::Base

  belongs_to :user
  has_and_belongs_to_many :users

  before_create :generate_access_code

  def generate_access_code
    new_code = [*('a'..'z'),*('0'..'9')].shuffle[0,6].join
    self.access_code = new_code
  end

end
