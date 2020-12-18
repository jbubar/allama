# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_17_010716) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.date "due_date"
    t.integer "owner_id"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_projects_on_name"
    t.index ["owner_id"], name: "index_projects_on_owner_id"
    t.index ["team_id"], name: "index_projects_on_team_id"
  end

  create_table "sections", force: :cascade do |t|
    t.string "name"
    t.integer "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "project_id"], name: "index_sections_on_name_and_project_id", unique: true
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "section_id"
    t.integer "assignee_id"
    t.date "due_date"
    t.boolean "completed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["section_id"], name: "index_tasks_on_section_id"
    t.index ["title"], name: "index_tasks_on_title"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_teams_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name", null: false
    t.string "email", null: false
    t.integer "team_id", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["full_name"], name: "index_users_on_full_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["team_id"], name: "index_users_on_team_id"
  end

end
