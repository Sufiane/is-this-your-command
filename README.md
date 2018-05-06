# is-this-your-command
git like command check.

Will check if a given command (input) is known among a list of command, allowing a max number of differences (errors) between the known command and the input command

For example: 
  The known command is 'root' and the number of error max allowed is 1.
  Then:
  If the input command (the command given) is 'toto', this will return the error result.
  If the input is 'toot', this will return the suggestion message for the known command 'root'
  If the input is 'root', this will return the suggestion message for the known command 'root'

