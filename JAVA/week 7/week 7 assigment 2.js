document.querySelector('.ace_editor').env.editor.insert(`
    import java.util.*;

// Define user defined exception InvalidInputEx
class InvalidInputEx extends Exception {
    public InvalidInputEx() {
        super("invalid index input");
    }

    public InvalidInputEx(String message) {
        super(message);
    }

    public InvalidInputEx(Throwable cause) {
        super(cause);
    }

    public InvalidInputEx(String message, Throwable cause) {
        super(message, cause);
    }
}

// Define the class IntList
class IntList {
    // Instance variable of int[]
    private int[] arr = new int[5];

    // Method set_value
    public void set_value(int index, int val) throws InvalidInputEx {
        try {
            arr[index] = val;
        } catch (ArrayIndexOutOfBoundsException e) {
            InvalidInputEx ex = new InvalidInputEx("invalid index input", e);
            throw ex;
        }
    }

    // Method getArray()
    public int[] getArray() {
        return arr;
    }
}


    //not here
`);