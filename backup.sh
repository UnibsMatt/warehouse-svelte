now=$(date +"%m_%d_%Y")
mysqldump -u root -p "example" --all-databases > /bk/${now}.sql