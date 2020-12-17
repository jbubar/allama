class Api::TasksController < ApplicationController
  def show
    @task = Task.find(params[:id])
    render "api/tasks/show"
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render 'api/tasks/show'
    else 
      render json:  @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render 'api/tasks/show'
    else 
      render json:  @task.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render 'api/tasks/show'
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :section_id, :assignee_id, :due_date, :completed)
  end
end
