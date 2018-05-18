class Api::V1::MessagesController < Api::ApiController

  def index
    render json: { user: current_user, messages: Message.all }
  end

  def show
    @messages = Message.all
  end
end

private
