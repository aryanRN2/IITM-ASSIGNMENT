document.querySelector('.ace_editor').env.editor.insert(`
    import java.util.*;

// Define DivisionException class here
class DivisionException extends Exception {
    @Override
    public String toString() {
        return "Division by 3 is not allowed";
    }
}

public class Test {

    // Define divide(int a, int b) here
    public static int divide(int a, int b) throws DivisionException {
        if (b == 3) {
            throw new DivisionException();
        }
        return a / b;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        // call divide method here
        try {
            System.out.println(divide(x, y));
        } catch (Exception e) {
            System.out.println(e);
        }
    


    //not here
`);