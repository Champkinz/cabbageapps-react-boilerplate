#!/bin/bash


CURRENT_REDUX_SYSTEM_BRANCH=`git branch | grep \* | cut -d ' ' -f2`;
COMMIT_MESSAGE="";

while getopts m: option
do
case "${option}"
in
m) COMMIT_MESSAGE=${OPTARG};;
esac
done

# Add a default commit message
if [ "$COMMIT_MESSAGE" = "" ]; then
    echo "Please enter a commit message. Use -m, using Default Commit Message";
    COMMIT_MESSAGE="* Sync *";
fi


git add -A;
git add *;
git add .;

git commit -m "$COMMIT_MESSAGE";

echo "Pulling Changes from origin";
if git pull origin $CURRENT_REDUX_SYSTEM_BRANCH;
then
    echo "Pushing changes to origin from";
    if git push origin $CURRENT_REDUX_SYSTEM_BRANCH;
    then
        echo "Successfully Pushed";
    else
            echo "Error while Pushing";
        exit 1 # terminate and indicate error
    fi
else
    echo "Failed to Pull"
    exit 1 # terminate and indicate error
fi
