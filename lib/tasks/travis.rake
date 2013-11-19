task :travis do
    [
      "rake db:create",
      "rake db:migrate RAILS_ENV=test",
      "rspec spec",
      "rake jasmine:ci"
    ].each do |cmd|
    puts "Starting to run #{cmd}..."
    system("bundle exec #{cmd}")
    raise "#{cmd} failed!" unless $?.exitstatus == 0
  end
end
