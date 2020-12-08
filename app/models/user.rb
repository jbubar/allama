class User < ApplicationRecord
    attr_reader :password
    
    before_validation :ensure_session_token!
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
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
