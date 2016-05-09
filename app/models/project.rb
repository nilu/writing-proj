class Project < ActiveRecord::Base

  before_create :generate_access_code

  def generate_access_code
    new_code = [*('a'..'z'),*('0'..'9')].shuffle[0,6].join
    self.access_code = new_code
  end

end
