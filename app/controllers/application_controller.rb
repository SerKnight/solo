class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def homepage
  	#@homepage_photo ||= Unsplash::Photo.search("space").take(1).first
  	@rot_advs = ['home1.jpeg','home2.jpeg','home3.jpeg']
  	@homepage_img_url = @rot_advs.sample
  end
end
