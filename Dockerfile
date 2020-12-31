FROM ubuntu:latest

RUN apt-get update && apt-get install git curl libpq-dev build-essential libssl-dev libreadline-dev zlib1g-dev sqlite3 libsqlite3-dev -y
# add app user
# RUN adduser --gecos '' --disabled-password app
# # set user to app
# USER app
# set rbenv, ruby-build bin paths
ENV HOME /home/app
ENV PATH $HOME/.rbenv/shims:$HOME/.rbenv/bin:$HOME/.rbenv/plugins/ruby-build/bin:$PATH
# clone rbenv
RUN git clone git://github.com/sstephenson/rbenv.git ~/.rbenv
# clone ruby-build
RUN git clone git://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
# set working directory to project src
COPY .ruby-version .
# add Gemfile, Gemfile.lock, .ruby-version to docker
# install ruby
RUN rbenv install

RUN rbenv global 2.5.1

RUN gem update --system
# install bundler
RUN gem install bundler -V
# install app dependencies
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN DEBIAN_FRONTEND="noninteractive" apt-get -y install tzdata
WORKDIR /usr/src

COPY . .

RUN bundle install

# run rails
EXPOSE 3000 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]