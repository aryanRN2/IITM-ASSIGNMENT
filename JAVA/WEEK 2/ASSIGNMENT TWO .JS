(function() {
    const cleanSolution = `import java.util.Scanner;

class Employee{
    String ename;
    String eid;
    String edept;
    
    public Employee(){
        ename = "guest";
    }
    
    // Parameterized constructor
    public Employee(String name, String id, String dept) {
        this.ename = name;
        this.eid = id;
        this.edept = dept;
    }
    
    // Copies the department name of another employee
    public void copyDept(Employee e) {
        this.edept = e.edept;
    }
    
    // Displays the employee details
    public void displayDetails() {
        System.out.println("ename : " + ename);
        System.out.println("eid : " + eid);
        System.out.println("edept : " + edept);
    }
}

public class FClass
{
    public static void main(String args[])
    {
        Scanner s = new Scanner(System.in);
        Employee e1 = new Employee();
        
        //Enter name of the employee
        String name = s.nextLine();
        
        //Enter id of the employee
        String id = s.nextLine();
        
        //Enter department of the employee
        String dept = s.nextLine();
        
        Employee e2 = new Employee(name,id,dept);
        
        e1.copyDept(e2);
        //Copies the department name of e2 into e1's department name.
        
        e1.displayDetails();
    }
}`;

    // 1. Register paste blocker bypass just in case
    document.addEventListener('paste', function(e) {
        e.stopImmediatePropagation();
    }, true);

    // 2. Select editor textarea
    const ta = document.querySelector('textarea.inputarea') || 
               document.querySelector('.CodeMirror textarea') || 
               document.querySelector('textarea');
               
    if (ta) {
        ta.focus();
        
        // Select all text (so insertText overwrites it instead of appending)
        document.execCommand('selectAll', false, null);
        
        // Overwrite selected text with the clean solution
        const success = document.execCommand('insertText', false, cleanSolution);
        if (success) {
            console.log("Clean code successfully injected! You can now click Run Code / Submit.");
        } else {
            console.log("Injection failed. Try clicking inside the editor and pressing Cmd+V (Mac) or Ctrl+V (Windows).");
        }
    } else {
        console.error("Please click inside the editor before running this script.");
    }
})();
