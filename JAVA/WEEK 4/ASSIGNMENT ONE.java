import java.util.*;

abstract class StringOperations {
    public abstract String reverse(String s);
    public abstract int vowelCount(String s);
}

abstract class StringReverse extends StringOperations {
    public String reverse(String s) {
        return new StringBuilder(s).reverse().toString();
    }
}

class UpdatedStrings extends StringReverse {
    public int vowelCount(String s) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for (int i = 0; i < s.length(); i++) {
            if (vowels.indexOf(s.charAt(i)) != -1) {
                count++;
            }
        }
        return count;
    }
}

class Example {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        UpdatedStrings str = new UpdatedStrings();
        System.out.println("Reverse of " + s + " is " + str.reverse(s));
        System.out.println("Vowel count of " + s + " is " + str.vowelCount(s));
    }
}
