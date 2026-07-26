import java.util.*;

class ArrayExample<T> {
    T[] a;

    // Constructor to initialize the array
    public ArrayExample(T[] a) {
        this.a = a;
    }

    // Method to display elements of the array (space separated on a single line)
    public void display() {
        for (T val : a) {
            System.out.print(val + " ");
        }
        System.out.println();
    }

    // Method to count occurrences of a specific element
    public int elementCount(T x) {
        int count = 0;
        for (T val : a) {
            if (val.equals(x)) {
                count++;
            }
        }
        return count;
    }
}

public class ArrayObject {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int len = sc.nextInt();
        
        // Input for the Integer array
        Integer[] a1 = new Integer[len];
        for (int i = 0; i < len; i++) {
            a1[i] = sc.nextInt();
        }
        int s1 = sc.nextInt();
        
        // Input for the String array
        String[] a2 = new String[len];
        for (int i = 0; i < len; i++) {
            a2[i] = sc.next();
        }
        String s2 = sc.next();
        
        ArrayExample<Integer> obj = new ArrayExample<>(a1);
        ArrayExample<String> obj1 = new ArrayExample<>(a2);
        
        obj.display();
        System.out.println(obj.elementCount(s1));
        obj1.display();
        System.out.println(obj1.elementCount(s2));
    }
}
