class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def homepage

  end


  def download_resume
  	send_file(
    	"#{Rails.root}/public/ckk_dev_resume.pdf",
	    filename: "Christopher_Knight_Developer.pdf",
	    type: "application/pdf"
	  )
  end
end
