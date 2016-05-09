class Api::V1::ProjectController < Api::V1::BaseController
  before_filter :authenticate_user!

  def index 
    pp "3"*60
    pp params
    respond_with(current_user.projects)
  end

  def create 
    pp '5'*60
    pp params
    @project = Project.create(name: params['project']['name'], teacher_id: params['project']['teacher_id'])
    pp @project


    pp blah = @project.as_json

    render :status => 200, :json => blah

    # respond_with(Project.all)

  end

  def join
    pp '9'*60
    pp params
    pp user = User.find_by_id(params[:user_id])
    pp project = Project.find_by_access_code(params[:access_code])

    if user && project
      user.projects << project
    end

    render :status => 200, :json => {}
  end

  def test 
    pp "5"*60
    pp params
    respond_with(Project.all)
  end

  def new_proj
    pp '6'*60
    @project = Project.create(name: 'name')
  end

end
