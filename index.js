// function like git when you mis-type some command and propose you one close enough to what you typed

const commands = [
    'root',
]

const isInputCloseToCommand = (command, input, maxErrorAllowed) => {
    let errorTracker = 0
    const commandLetters = command.split('')
    
    commandLetters.forEach((letter, index) => {
        if (letter !== input[index]) {
            errorTracker++
        }  

        if (errorTracker > maxErrorAllowed) {
            return
        }
    })

    return errorTracker <= maxErrorAllowed
}


const checkCommand = (userCommand, maxError = 1) => {
    let possibleCommand
    
    commands.forEach(command => {   
        // checking in lecture order
        const closeToLectureOrder = isInputCloseToCommand(command, userCommand, maxError)
        
        // checking in reverse order
        const reversedCommand = command.split('').reverse().join('')
        const reversedUserCommand = userCommand.split('').reverse().join('')
        const closeToReverseOrder = isInputCloseToCommand(reversedCommand, reversedUserCommand, maxError)
        
        // we break the loop as soon as we find a registered command 
        // that match or is close enough to the user input
        if (closeToLectureOrder || closeToReverseOrder) {
            possibleCommand = command
            
            return 
        }
    })
    
    if (!possibleCommand) {
        return `Error, no command corresponding to what you meant (max error allowed ${maxError})`
    }
    
    return `Did you mean: ${possibleCommand} ?`
}

console.log('-- result', checkCommand('oot'))
