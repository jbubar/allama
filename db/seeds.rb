# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


badgers = Team.create!({name: 'badgers'})
igos = Team.create!({name: 'igos'})

octavia = User.create!({full_name: 'Octavia Butler', email: 'octavia@ebutler.com', password: '123456', team_id: badgers.id})
nelson = User.create!({full_name: 'Nelson Olguin', email: 'nelson@savetheworld.com', password: '123456', team_id: badgers.id})
cory = User.create!({full_name: 'Cory Henry', email: 'gotchanow@doc.com', password: '123456', team_id: badgers.id})
barcuh = User.create!({full_name: 'Baruch Spinoza', email: 'coolkid.com', password: '123456', team_id: badgers.id})

full_stack = Project.create!({name: 'MERN', description: 'Learn how to use mern and make a compeling project from it', due_date: Date.new(2021,1,3), owner_id: baruch, team_id: badgers.id})
befriend = Project.create!({name: 'Befriend a Penguin Project', description: 'Do you know if penguins are friendly? Lets find out', due_date: Date.today, owner_id: octavia, team_id: badgers.id})
mars = Project.create!({name: 'Mars', description: 'Good morning', due_date: Date.today, owner_id: nelson, team_id: badgers.id})
global_warming = Project.create!({name: 'Solve Global Warming', description: 'Probably the most worth out time', due_date: Date.new(2020,1,1), owner_id: cory, team_id: badgers.id})

to_do = Section.create!({name: 'To Do', project_id: full_stack.id})
done = Section.create!({name: 'Done', project_id: full_stack.id})
to_do1 = Section.create!({name: 'To Do', project_id: befriend.id})
doing = Section.create!({name: 'Doing', project_id: befriend.id})
ice_box = Section.create!({name: 'Ice Box', project_id: mars.id})
back_log = Section.create!({name: 'Prioritized Back Log', project_id: mars.id})
progress = Section.create!({name: 'In Progress', project_id: mars.id})
completed = Section.create!({name: 'Archive', project_id: mars.id})
we = Section.create!({name: 'We realy', project_id: global_warming.id})
need = Section.create!({name: 'Need to', project_id: global_warming.id})
something = Section.create!({name: 'Do something', project_id: global_warming.id})

eat = Task.create!({title:'Breakfast', section_id:done.id, assignee_id: baruch.id, due_date: Date.today})
learn = Task.create!({title:'Learn some code', section_id:done.id, assignee_id: nelson.id, due_date: Date.today})
