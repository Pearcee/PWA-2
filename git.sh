#   git config --global user.email "steven@gmail.com"
#  git config --global user.name "Pearcee"

comment = date +"%y.%m.%d.%T"
git status
git add --all .
git commit -m comment
git push -u origin master