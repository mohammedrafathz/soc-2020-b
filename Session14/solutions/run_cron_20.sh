t=$(date '+%H:%M:%S')

touch "./"$t".txt"

echo  "Hello "$(date '+%Y-%m-%d') >> "./"$t".txt"