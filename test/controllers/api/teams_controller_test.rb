require 'test_helper'

class Api::TeamsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_teams_show_url
    assert_response :success
  end

end
