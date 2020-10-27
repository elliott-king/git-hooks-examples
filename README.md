# Sample Git Hooks

Git Hooks are a built-in feature of git. You can add them to your repository, and git will run them at a certain time, depending on their filename.

This is especially useful for things like committing, because if the `pre-commit` hook script throws an error, the commit will throw the error and abort.

## Usage

Find a hook that is useful, and copy it to your repository - `.git/hooks/hookname`. The "hookname" should look something like `pre-commit`. The file extensions in this repository are just for illustrative purposes, your hooks __should not__ have extensions. If there are multiple examples (of the same type) you want, you will have to merge them into one file.

After creating the file, make it executable: `chmod +x .git/hooks/pre-commit`.

## Further Reading

 - How to commit git hooks to source control - [SO Question](https://stackoverflow.com/questions/57591839/how-to-commit-git-hooks)
 - The complete list of where you can attach git hooks - [guide](https://stackoverflow.com/questions/57591839/how-to-commit-git-hooks)
 - An overview of several possible use cases - [guide](https://wadmiraal.net/lore/2014/07/14/how-git-hooks-made-me-a-better-and-more-lovable-developer/)