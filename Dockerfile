FROM ruby:2.5-alpine3.11
COPY . .
RUN gem install bundler -v 2.1.4
RUN apt-get update && apt-get upgrade -y && \
    apt-get install --no-install-recommends -y ca-certificates 
RUN bundle install
RUN npm install
RUN bundle exec rails
EXPOSE 3000 3000
CMD ["npm", "start"]