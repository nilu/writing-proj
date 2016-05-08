class Api::V1::ProjectController < Api::V1::BaseController
  before_filter :authenticate_user!

  def index 
    pp "3"*60
    pp params
    respond_with(Project.all)
  end



end
