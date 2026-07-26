document.querySelector('.ace_editor').env.editor.insert(`
    Stack<Character> stack = new Stack<>();
        for (int i = 0; i < sequence.length(); i++) {
            char c = sequence.charAt(i);
            // Push opening brackets to the stack
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } 
            // Check closing brackets
            else if (c == ')' || c == '}' || c == ']') {
                if (stack.isEmpty()) {
                    return false;
                }
                char top = stack.pop();
                if ((c == ')' && top != '(') || 
                    (c == '}' && top != '{') || 
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    //not here
`);