class Api::V1::UsersController < Api::V1::BaseController
  before_filter :authenticate_user!, :except => [:create, :show]

  def show
    pp "!"*60
    pp current_user
    pp params
    render :json => {:info => "Current User", :user => current_user}, :status => 200
  end

  def create
    pp "#"*60
    pp params
    @user = User.create(user_params)

    pp "~"*60
    pp access_code = params['project']['access_code'] 


    if @user.valid?
      pp "*"*60
      pp project = Project.find_by_access_code(access_code)
      
      @user.projects << project if project

      sign_in(@user)
      respond_with @user, :location => api_users_path
    else
      respond_with @user.errors, :location => api_users_path
    end
  end

  def update
    respond_with :api, User.update(current_user.id, user_params)
  end

  def destroy
    respond_with :api, User.find(current_user.id).destroy
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :user_type)
  end
end
