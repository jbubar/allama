class Api::SectionsController < ApplicationController
  def show
    @section = Section.find(params[:id])
    render "api/sections/show"
  end

  def create
    @section = Section.new(section_params)
    if @section.save
      render 'api/sections/show'
    else 
      render json:  @section.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @section = Section.find(params[:id])
    if @section.update(section_params)
      render 'api/sections/show'
    else 
      render json:  @section.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @section = Section.find(params[:id])
    if @section.update(section_params)
      render 'api/sections/show'
    else 
      render json:  @section.errors.full_messages, status: :unprocessable_entity
    end
  end

  private 
  def section_params
    params.require(:section).permit(:name, :project_id)
  end
end
