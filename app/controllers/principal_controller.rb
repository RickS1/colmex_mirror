class PrincipalController < ApplicationController
  def principal
    I18n.locale = params[:locale]
  end

  def historia

  end
end
