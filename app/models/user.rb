class User < ApplicationRecord
    attr_reader :password
    
    before_validation :ensure_session_token!
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    belongs_to :team

    def self.new_with_team(params)
      team_name = params[:team_name] ##This is just a brainstorm of what the code will eventually look like.
      team = Team.find_by(name: team_name)
      team = Team.create!(name: team_name) unless team
      user_credentials = params.except!(:team_name)
      user_credentials[:team_id] = team.id
      User.new(user_credentials)
    end
    
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      user&.is_password?(password) ? user : nil
    end

    def self.generate_session_token
      SecureRandom::urlsafe_base64
    end
    
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
      BCrypt::Password.new(self.password_digest) == password
    end
    
    def reset_session_token!
      self.session_token = User.generate_session_token
      self.save!
      self.session_token
    end
    
    private
    
    def ensure_session_token!
      self.session_token ||= User.generate_session_token
    end
end
