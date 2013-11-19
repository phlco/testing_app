namespace :travis

  task :run do
    ["rspec spec", "rake jasmine:ci"].each do |cmd|
      puts "Starting to run #{cmd}..."
      system("bundle exec #{cmd}")
      raise "#{cmd} failed!" unless $?.exitstatus == 0
    end
  end

  task :prepare do
    app_name = "testing_app"
    ["sh -e /etc/init.d/xvfb start",
    "export DISPLAY=:99.0",
    "psql -c 'create database #{app_name}_test;' -U postgres",
    "export JASMINE_SPEC_FORMAT=documentation"].each do |cmd|
      system("#{cmd}")
    end
  end

end
