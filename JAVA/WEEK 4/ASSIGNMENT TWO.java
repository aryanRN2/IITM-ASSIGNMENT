import java.util.*;

interface Iterator {
    public boolean has_next();
    public Object get_next();
}

class Sequence {
    private final int maxLimit = 80;
    private SeqIterator _iter = null;
    int[] iArr;
    int size;

    public Sequence(int size) {
        int cap = (size > maxLimit) ? maxLimit : size;
        iArr = new int[cap];
        this.size = 0;
    }

    public void addTo(int elem) {
        if (this.size < iArr.length) {
            iArr[this.size++] = elem;
        }
    }

    public Iterator get_Iterator() {
        _iter = new SeqIterator();
        return _iter;
    }

    private class SeqIterator implements Iterator {
        int indx;
        public SeqIterator() {
            indx = -1;
        }
        public boolean has_next() {
            return indx < size - 1;
        }
        public Object get_next() {
            indx++;
            return iArr[indx];
        }
    }
}

class FClass {
    public static void main(String[] args) {
        Sequence sObj = new Sequence(5);
        Scanner sc = new Scanner(System.in);
        for(int i = 0; i < 5; i++) {
            sObj.addTo(sc.nextInt());
        }
        Iterator i = sObj.get_Iterator();
        while(i.has_next()) {
            System.out.print(i.get_next() + ", ");
        }
    }
}
